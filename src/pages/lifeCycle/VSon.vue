<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue'

onBeforeMount(() => {
  console.log('son onBeforeMount')
})
onMounted(() => {
  console.log('son onMounted')
})

onUnmounted(() => {
  console.log('son onUnmounted')
})
onUpdated(() => {
  console.log('son onUpdated')
})

onBeforeUpdate(() => {
  console.log('son onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('son onBeforeUnmount')
})
</script>

<template>
  <div>this is son component</div>
</template>

<style scoped lang="scss"></style>
