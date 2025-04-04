<script setup>
const props = defineProps(['addr','addc'])
</script>

<template>
  <div aaa="aaa" class="aaa">
    this is child component <br />
    <span>{{ props.addr }}</span>
    <span>{{ props.id }}</span>
  </div>
</template>

<style scoped></style>
