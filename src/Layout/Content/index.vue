<script setup lang="ts">

</script>

<template>
  <div class="toxic-content">
    <slot></slot>
<!--    <div class="toxic-content__items" v-for="item in 100" :key="item">-->
<!--      {{ item }}-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="scss">
@include block(content) {
  @include scroll;
  flex: 1;
  overflow: auto;
  margin: 10px 0 0 10px;
  @include ele(items) {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
}
</style>
