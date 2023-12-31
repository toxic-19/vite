<script setup lang="ts">
import {ref} from 'vue'
const text = ref("")
// markdown編輯器應用
</script>

<template>
  <div class="plan-container"></div>
  <v-md-editor left-toolbar="undo redo clear | bold italic h strikethrough hr | ul ol todo-list quote code emoji tip | table image link | save"
               v-model="text" height="400px" mode="edit" autofocus></v-md-editor> <!--雙向綁定，只有編輯組件才支持-->
</template>

<style scoped lang="scss">
$namespace: "plan";
@include block(container) {

}
</style>
