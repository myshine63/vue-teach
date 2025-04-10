<script setup>
// const props = defineProps(['title', 'user'])
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
  },
  male: {
    type: Boolean,
    default: false,
  },
  name: {
    type: Object,
    default: () => {
      return { first: 'hello', last: 'world' }
    },
  },
})
const emit = defineEmits(['changeAge'])
const fn = () => {
  emit('changeAge')
}
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p @click="fn">{{ props.user }}</p>
    <p>user is male {{ male }}</p>
    <p>{{name.first}},{{name.last}}</p>
  </div>
</template>

<style scoped lang="scss">
p {
  margin-bottom: 20px;
  border: 1px solid #e8deff;
}
</style>
