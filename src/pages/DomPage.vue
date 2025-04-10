<script setup>
import { ref, useTemplateRef } from 'vue'

/**
 * vue中可以创建一个ref去操作dom。但是需要在mounted之后
 * ref可以绑定在dom上和组件上
 */
// 方法1
const input = ref(null)
const f = () => {
  input.value.click()
}
// 方法2
const a = useTemplateRef('file-input');
const f1 = ()=>{
  a.value.click()
}
</script>

<template>
  <div class="container">
    <input type="file" class="file-input" ref="input" />
    <input type="file" class="file-input" ref="file-input" />
    <div @click="f">方法1按钮</div>
    <div @click="f1">方法2按钮</div>
  </div>
</template>

<style scoped lang="scss">
.file-input {
  display: none;
}
</style>
