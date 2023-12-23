<script setup lang="ts">
import {defineProps, reactive} from "vue"
// 如果是父组件要传递过来TreeData:
defineProps<{treeData?: Tree[]}>()
interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}
const handleItem = (item: Tree) => {
  item.checked = !item.checked
}
</script>

<template>
  <div class="tree-item" v-for="item in treeData" @click.stop="handleItem(item)">
    <input v-model="item.checked" type="checkbox"> <span>{{item.name}}</span>
    <Tree v-if="item?.children?.length" :tree-data="item?.children"></Tree>
  </div>
</template>

<style scoped lang="scss">
$namespace: "tree";
@include block(item) {
  margin-left: 10px;
  cursor: pointer;
}
</style>
