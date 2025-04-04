<script setup>
import ChildComponent from '@/pages/ChildComponent.vue'
import { reactive, ref, shallowRef, watch } from 'vue'

const htmlString = '<p>插入一个dom节点</p>'
const a = ref({
  name: {
    firstname: 'tom'
  },
  id: 'child',
})
console.log(a.value.name)

const tom = reactive({
  name:"tom",
})
console.log(tom.name)
const count = ref(0);
count.value++;
count.value++;
count.value++;
count.value++;
count.value++;
count.value++;
count.value++;
const b = ref({
  count: 1,
})
const changeB = () => {
  b.value.count++
}
const c = shallowRef({
  count: 1,
})
const changeC = () => {
  c.value.count++
}
// 结构赋值
const d = ref({ aa: 1 })
let e = d.value.aa
console.log(e)
console.log(d.value.aa)
watch(d, () => {})
watch(
  () => b.value.count,
  () => {},
)

</script>

<template>
  <div class="home-page">
    <div v-html="htmlString"></div>
    <div>{{count}} 111111</div>
    <div v-bind="a"></div>
    <child-component addr="aaa"  addc="aaa" aaa="aaa" key="" class="aaa"/>
    <div>
      ref和shallowRef <br />
      <div @click="changeB">
        {{ b.count }}
      </div>
      <div @click="changeC">
        {{ c.count }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
