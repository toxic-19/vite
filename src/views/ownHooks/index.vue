<script setup lang="ts">
import useUrlToBase64 from "@/hooks/useUrlToBase64"
import {ref} from "vue";
const base64 = ref('')
const transformBase64 = () => {
  useUrlToBase64({
    element: '#hook-images'
  }).then(res => {
    base64.value = res
  })
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
