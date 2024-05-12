<script setup lang="ts">
import { reactive } from "vue"

interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}
const tree = reactive<Tree[]>([
  { name: "1", checked: false, children: [{ name: "1-1", checked: false }] },
  {
    name: "2",
    checked: false,
    children: [
      { name: "2-1", checked: false },
      { name: "2-2", checked: false }
    ]
  },
  {
    name: "3",
    checked: false,
    children: [
      {
        name: "3-1",
        checked: false,
        children: [
          { name: "3-1-1", checked: false },
          { name: "3-1-2", checked: false }
        ]
      }
    ]
  },
  { name: "4", checked: false }
])
</script>
<template>
  <Tree :tree-data="tree">
    <template #tree="slotProps">
      {{ slotProps.content }}
    </template>
  </Tree>
</template>
<style></style>
