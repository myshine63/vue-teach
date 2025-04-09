<script setup>
import { computed, reactive } from 'vue'

const data = reactive([
  {
    name: 'tom',
    age: 12,
  },
  {
    name: 'jerry',
    age: 6,
  },
])
const filterList = computed(() => {
  data.filter((item) => item.age > 10)
})
</script>

<template>
  <div class="container">
    <ul>
      <li>1. v-for可以遍历数组，数字，对象</li>
      <li>2. 当v-if和v-for同时绑定的时候，v-if优先级更高。并且v-if访问不到v-for中的变量</li>
      <li>
        3.当v-if和v-for同时需要的时候，方法1:使用计算属性，提前进行条件筛选。方法2:使用template进行v-for循环，
        在内部使用v-if
      </li>
      <li>4. template不能绑定key值</li>
      <li>5. 遍历数字的时候，数字是自然数,并且遍历从1开始</li>
    </ul>
    <div v-for="item in data" :key="item.name">name is {{ item.name }}, age is {{ item.age }}</div>
    <div v-for="item in filterList" :key="item.name">
      name is {{ item.name }}, age is {{ item.age }}
    </div>
    <template v-for="item in data">
      <div v-if="item.age > 10" :key="item.name">
        name is {{ item.name }}, age is {{ item.age }}
      </div>
    </template>
    <div v-for="(value, key, index) in data[0]">{{ key }} is {{ value }},index is {{ index }}</div>
    <div v-for="num in 2">num is {{ num }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
