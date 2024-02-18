<script lang="ts" setup>
import {ref} from "vue";

const width = ref<string>('200px')
const aboutColor = ref({
  color: '#ffffff',
  backgroundColor: 'lightgreen'
})
</script>

<template>
  <div class="A">
    A组件中的内容，以下为插槽由父组件编写
  </div>
  <slot></slot>
  <div class="box">
    BOX
  </div>
</template>

<style scoped lang="scss">
.A {
  color: lightpink;
}

:slotted(.parent) {
  padding-top: 20px;
  font-weight: bolder;
  font-size: 24px;
}

.box {
  border: 1px solid red;
  width: v-bind(width);
  color: v-bind('aboutColor.color');
  background: v-bind('aboutColor.backgroundColor');
  height: 100px;
}
</style>
