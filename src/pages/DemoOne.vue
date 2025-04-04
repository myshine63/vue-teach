<script setup>
import { computed, ref } from 'vue'

const count = ref(0)
const fn = () => {
  count.value++
  count.value++
  count.value++
  count.value++
}
const fn2 = () => {
  console.log(123123)
  return 1000
}
let c = computed(() => {
  console.log(11111)
  return 10
})
let arr = ref([
  {
    show: true,
  },
  { show: false },
]);

</script>

<template>
  <div>
    <button @click="fn">{{ count }}</button>
    <button>{{ fn2() }}</button>
    <button>{{ c }}</button>
    <template v-for="(item,index) in arr">
      <div :key="index" v-if="item.show">{{item.show}}</div>
    </template>

  </div>
</template>

<style scoped></style>
