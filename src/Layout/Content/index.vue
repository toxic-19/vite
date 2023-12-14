<script setup lang="ts">

</script>

<template>
  <div class="toxic-content">
    <div class="toxic-content__items" v-for="item in 100" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@include block(content) {
  flex: 1;
  overflow: auto;
  @include ele(items) {
    padding: 10px;
    margin: 10px;
    border: 1px solid #cccccc;
    border-radius:4px
  }
}
</style>
