<!-- setup形式的script只能出现一个 非setup形式的script可以出现多个 -->
<script setup lang="ts">
import Layout from './Layout/index.vue' // setup下不需要注册
import WaterFall from './views/waterFall/index.vue'
import Card from './components/Card.vue'
import Tree from './components/Tree.vue'
import {reactive} from "vue"
interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}
const tree = reactive<Tree[]>([
  {name: "1", checked: false, children: [{name: "1-1", checked: false}]},
  {name: "2", checked: false, children: [{name: "2-1", checked: false}, {name: "2-2", checked: false}]},
  {name: "3", checked: false,
    children: [
      { name: "3-1", checked: false, children: [
          {name: "3-1-1", checked: false},
          {name: "3-1-2", checked: false}
        ]
      }]
  },
  {name: "4", checked: false}
])
</script>

<template>
  <Layout>
    <Card title="选择物品">
      <template #content>222222</template>
    </Card>
    <Tree :tree-data="tree"></Tree>
    <WaterFall></WaterFall>
  </Layout>
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>
