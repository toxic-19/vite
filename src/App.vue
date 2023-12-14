<!-- setup形式的script只能出现一个 非setup形式的script可以出现多个 -->
<script setup lang="ts">
import Layout from './Layout/index.vue' // setup下不需要注册
</script>

<template>
<!--  <HelloWorld msg="Vite + Vue" />-->
  <Layout></Layout>
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>
