<script setup lang="ts">
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
  <h1>{{ msg }}</h1>
  <div class="hello__card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

</template>

<style scoped>
/* scoped 作用域 data-v-hash 唯一标识 避免冲突 */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
