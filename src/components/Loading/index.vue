<script setup lang="ts">
import {defineExpose, ref} from "vue";

const isShow = ref<Boolean>(false)

const show = () => {
  isShow.value = true
  console.log(isShow.value)
}

const hide = () => isShow.value = false


defineExpose({
  isShow,
  show,
  hide
})
</script>

<template>
  <div class="loading" v-if="isShow">
    Loading...
  </div>
</template>

<style scoped lang="scss">
.loading {
  background: #000;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
}
</style>
