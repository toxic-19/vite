<script setup lang="ts">
const changeTheme = () => {
  console.log('changeTheme')
}
</script>

<template>
  <div class="toxic-header">
    <button @click="changeTheme">切换主题模式</button>
  </div>
</template>

<style scoped lang="scss">
@include block(header) {
  height: 64px;
  border-bottom: 2px solid #cccccc;
}
</style>
