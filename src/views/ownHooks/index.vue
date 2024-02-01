<script setup lang="ts">
import useUrlToBase64 from "@/hooks/useUrlToBase64"
import {ref} from "vue"
// 为什么 hooks 使用了 promise：hooks 在 setup 下是同步执行的，用 Promise 可以用回调来接收 不阻塞 setup 代码块的执行
const base64 = ref('')
const transformBase64 = async () => {
  base64.value = await useUrlToBase64({element: '#hook-images'})
}
</script>

<template>
  <div class="hooks-container">
    <img id="hook-images" src="src/assets/lazy-images/lazy4.jpg" alt="">
    <a-button @click="transformBase64">转换</a-button>
    <a-textarea v-model:value="base64" style="width: 70%" :rows="18" showCount allowClear />
  </div>
</template>

<style scoped lang="scss">
$namespace: "hooks";
@include block(container) {
  display: flex;
  align-items: center;
  img {
    width: 256px;
    object-fit: contain;
  }
}
</style>
