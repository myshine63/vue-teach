<script setup>
import { ref } from 'vue'

const a = ref('')
</script>

<template>
<div class="container">
  <div>
    <label>a is {{a}}<input type="text" v-model="a"></label>
  </div>
  <div>
    <label>a is {{a}}<input type="text" v-model="a"></label>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
