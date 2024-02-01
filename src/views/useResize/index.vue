<script setup lang="ts">
import useResize from "v-resize-zz"
import {onMounted, ref} from "vue"
const width = ref<number>()
const height = ref<number>()
onMounted(() => {
  // 自定义hook
  useResize(document.querySelector('#resize') as HTMLElement, (e: DOMRectReadOnly) => {
    // 返回的是DOMRectReadOnly对象
    // 添加监听的操作
    width.value = e.width
    height.value = e.height
  })
})
const domRect = ref<object>()
const resizeCallback = (e: DOMRectReadOnly) => {
  domRect.value = e
}
</script>

<template>
  <div class="resize-container">
    <div id="resize" class="resize">
      自定义hook: <hr>
      width: {{width}} <br>
      height: {{height}}
    </div>
    <div class="resize" v-resize="resizeCallback">
      插件使用: <hr>
      DOMRectReadOnly:  {{domRect}}
    </div>
  </div>
</template>

<style scoped lang="scss">
$namespace: "resize";
@include block(container) {
  display: flex;
  .resize {
    width: 300px;
    height: 200px;
    resize: both;
    overflow: hidden;
    border: 1px solid #ccc;
  }
}
</style>
