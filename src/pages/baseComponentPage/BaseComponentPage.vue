<script setup>
/**
 *  1. 组件和函数比较类似，都是为了封装逻辑，以到复用的功能，相对来说组件功能更加强大,
 *  不经包含逻辑，还包含了UI
 *  2. 每个组件都只有一个根节点
 *  3. 组件命名最好是两个及以上单词，首字母大写
 *  4. 组件和函数一样可以接受参数（vue中称为prop）。但是在组建中必须显示申明接受哪些prop，
 *  未被申明的参数会被当做根节点的属性
 *  5. 组件也可以向dom一样绑定事件，同样的需要在组建中声明接受哪些事件
 */

import VChild from '@/pages/baseComponentPage/VChild.vue'
import { reactive } from 'vue'

const user = reactive({
  name: 'tom',
  age: 5,
})
const changeAge = () => {
  user.age++
}
</script>

<template>
  <div>
    <VChild
      title="this is child component"
      id="child"
      class="child"
      :user="user"
      @changeAge="changeAge"
    ></VChild>
    <VChild
      title="this is child component"
      id="child"
      class="child"
      :user="user"
      @changeAge="changeAge"
    ></VChild>
  </div>
</template>

<style scoped lang="scss">
.child {
  color: #4822a5;
}
</style>
