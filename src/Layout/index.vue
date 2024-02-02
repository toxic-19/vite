<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'

</script>

<template>
  <div class="toxic-layout">
    <Menu></Menu>
    <div class="toxic-layout__right">
      <Header></Header>
      <div class="content">
        <router-view></router-view>
      </div>
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
    .content {
      @include scroll;
      flex: 1;
      overflow: auto;
      margin: 10px 0 30px 10px;
    }
  }
}
</style>
