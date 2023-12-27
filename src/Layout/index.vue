<script setup lang="ts">
import Content from './Content/index.vue'
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'

</script>

<template>
  <div class="toxic-layout">
    <Menu></Menu>
    <div class="toxic-layout__right">
      <Header></Header>
      <Content><slot></slot></Content>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include block(layout) {
  @include bfc;
  display: flex;
  @include ele(right) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
