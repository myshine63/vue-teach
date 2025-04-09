<script setup>
import { ref } from 'vue'

const destroy = ref(false)
const hidden = ref(false)
</script>

<template>
  <div class="container">
    <div>
      <button @click="destroy = !destroy">destroy</button>
      <button @click="hidden = !hidden">hidden</button>
    </div>
    <ul>
      <li>1. 如果是绑定在dom上,v-if会销毁dom，v-show只是display切换</li>
      <li>
        2. 如果绑定在组建上。v-if只有在为true的时候才会去创建组件实例，渲染dom。并且在切换的时候，
        会涉及到dom销毁和新增和组件实例的销毁和创建，并且会执行对应的生命周期。开销比较大
      </li>
      <li>3. v-show组件会立即创建组件实例</li>
      <li>
        4. 综合所述，在频繁切换的时候，使用v-show，反之使用v-if。另外需要执行生命周期，或者重置的时候使用v-if
      </li>
    </ul>
    <div v-if="destroy">v-if会销毁掉dom节点</div>
    <div v-show="hidden" :style="{display:'flex'}">v-show,只是display切换</div>
    <template v-if="destroy">
      <div>多个元素一起切换的时候，可以使用template</div>
      <div>多个元素一起切换的时候，可以使用template</div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
