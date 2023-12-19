<!-- setup形式的script只能出现一个 非setup形式的script可以出现多个 -->
<script setup lang="ts">
import Layout from './Layout/index.vue' // setup下不需要注册
import WaterFall from './views/waterFall/index.vue'
import Card from './components/Card.vue'
</script>

<template>
<!--  <Layout></Layout>-->
<!--  <WaterFall></WaterFall>-->
  <Card title="选择物品">
    <template #content>222222</template>
  </Card>
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>
