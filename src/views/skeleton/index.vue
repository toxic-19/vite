<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import Skeleton from "@/components/Skeleton.vue"
const CardSync = defineAsyncComponent(() => import("@/components/Card.vue"))

</script>

<template>
    <suspense>
      <template #default>
        <CardSync></CardSync>
      </template>
      <template #fallback>
        <Skeleton></Skeleton>
      </template> <!-- 在网络加载过程中展示的组件 -->
    </suspense>
</template>

<style scoped lang="scss">

</style>
