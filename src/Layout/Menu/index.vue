<script setup lang="ts">
import {routes} from "@/router/index.ts"
import {ref} from "vue"
import {useRouter} from "vue-router"
const router = useRouter()
const routesList = ref(routes[0].children)
const toPath = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="menu">
    <div class="menu-item" v-for="route in routesList" :key="route.path" @click="toPath(route.path)">
      {{route.name}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  min-width: 180px;
  height: 100%;
  border-right: 2px solid #cccccc;
  overflow-y: scroll;
  @include scroll(2);
  &-item {
    font-size: 14px;
    font-family: Consolas, Helvetica, sans-serif;
    height: 26px;
    line-height: 26px;
    padding: 6px 12px;
    border-bottom: 1px solid #a1a0a0;
    cursor: pointer;
  }
}
.ant-tabs > .ant-tabs-nav {
  height: 100%;
}
</style>
