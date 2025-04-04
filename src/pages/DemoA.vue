<script>
import { ref } from 'vue'

export default {
  setup(props, ctx) {
    const num = ref(0)
    ctx.emits('aaa')
    return {
      num,
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div>{{ num }}</div>
</template>

<style scoped></style>
