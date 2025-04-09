<script setup>
import { ref } from 'vue'

const hasError = ref(false)
const bacc = ref('background')
const change = () => {
  hasError.value = !hasError.value
}
</script>

<template>
  <div class="container">
    <div class="text" :class="{ 'has-error': hasError }" @click="change">
      绑定静态样式和动态样式
    </div>
    <div @click="change" :class="['text', hasError ? 'has-error' : bacc]">
      绑定静态样式和动态样式
    </div>
    <div :style="{ backgroundColor: 'green', 'font-size': '16px' }">style样式</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  // 注意如果交换has-error和text的位置
  .text {
    font-size: 16px;
    color: green;
  }

  .has-error {
    color: red;
  }

  .background {
    background-color: #d0d0f0;
  }
}
</style>
