<script setup lang="ts">
import {ref} from 'vue'
const text = ref("")
</script>

<template>
  <div class="plan-container"></div>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<style scoped lang="scss">
$namespace: "plan";
@include block(container) {

}
</style>
