<script setup>
import { reactive, ref, shallowReactive, shallowRef } from 'vue'

/**
 * 创建响应式变量的两种方法
 * ref可以接受任何类型的值。相当于创建了一个对象，然后把值赋给在对象的value属性
 * reactive只能接受对象，数组，map，set等。不能接受基本类型
 * 响应变量在一个nextTick中，修改多次，页面不会刷新多次.存在异步更新
 */
const a = ref(0)
console.log(a.value) // 在script中需要使用.value访问值
const b = reactive({ name: 'tom' })
/**
 * ref，reactive默认创建的是深层响应式
 * 后续新增属性，依赖具备响应式
 */
let c = reactive({
  name: {
    first: 'jerry',
  },
})
const changeCName = () => {
  c.name = { first: 'tom' }
}
const changeCFirst = () => {
  c.name.first = 'spike'
}
const addProps = () => {
  c.age = {
    num: 12,
  }
}
const changeNum = () => {
  c.age.num = 333
}
/**
 * 浅层响应式：shallowRef,shallowReactive
 */
let d = shallowRef({ name: 'tom' })
const changeD = () => {
  d.value.name = 'jerry'
}
let e = shallowReactive({ name: 0, age: { num: 12 } })
const changeEName = () => {
  e.name++
}
const changeENum = () => {
  e.age.num++
}
/**
 * 自动解包,将ref赋值给响应对象作为属性的时候，会自动解包，但是他们依然是关联的
 */
const f = ref(0)
const changeF = () => {
  f.value++
}
const g = reactive({
  f,
})
const changeG = () => {
  g.f++
}
const h = ref({ num: 0 })
const { num: i } = h.value
console.log(i,111)
const changeH = () => {
  h.value.num++
}
</script>

<template>
  <div class="container">
    <div>a.value is {{ a }}。在模版中使用的时候，不需要使用a.value会自动解包</div>
    <div>b.name is {{ b.name }}</div>
    <div @click="changeCName">{{ c.name }}</div>
    <div @click="changeCFirst">{{ c.name.first }}</div>
    <div @click="addProps">{{ c.age?.num }} addprop</div>
    <div @click="changeNum">{{ c.age?.num }} 22</div>
    <div @click="changeD">{{ d.name }} 33dd</div>
    <div @click="changeEName">e.name is {{ e.name }},e.age.num is {{ e.age.num }}</div>
    <div @click="changeENum">e.age.num is {{ e.age.num }}</div>
    <div @click="changeF">f.value is {{ f }}</div>
    <div @click="changeG">g.f is {{ g.f }}</div>
    <div @click="changeH">{{i}}</div>
  </div>
</template>

<style scoped lang="scss">

</style>
