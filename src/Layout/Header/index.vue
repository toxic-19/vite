<script setup lang="ts">
const changeTheme = () => {
  console.log('changeTheme')
}
</script>

<template>
  <div class="toxic-header">
    <a-button @click="changeTheme">切换主题模式</a-button>
  </div>
  <Teleport to="body">
    <div class="teleport">通过Teleport进行挂载的模板</div>
  </Teleport>
</template>

<style scoped lang="scss">
@include block(header) {
  height: 64px;
  border-bottom: 2px solid #cccccc;
}
.teleport {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
