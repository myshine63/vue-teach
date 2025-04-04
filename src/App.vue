<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">vue教学demo</header>
    <main class="main">
      <nav class="nav"></nav>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 100px;
    width: 100%;
    border-bottom: 1px solid palegoldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }

  .main {
    width: 100%;
    flex: 1;
    display: flex;

    .nav {
      width: 300px;
      height: 100%;
      border-right: 1px solid salmon;
      background: papayawhip;
    }

    .content {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
