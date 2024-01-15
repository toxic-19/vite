<!-- setup形式的script只能出现一个 非setup形式的script可以出现多个 -->
<script setup lang="ts">
import Layout from './Layout/index.vue' // setup下不需要注册
import WaterFall from './views/waterFall/index.vue'
import TodoList from './views/todoList/index.vue'
import Skeleton from './components/Skeleton.vue'
import Tree from './components/Tree.vue'
import GroupNum from './views/groupNum/index.vue'
import Directives from './views/directives/index.vue'
import {reactive, defineAsyncComponent} from "vue"
// 引入异步组件
const CardSync = defineAsyncComponent(() => import('./components/Card.vue'))
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
    <h4>1. 异步组件</h4>
    <suspense>
      <template #default>
        <CardSync></CardSync>
      </template>
      <template #fallback>
        <Skeleton></Skeleton>
      </template> <!-- 在网络加载过程中展示的组件 -->
    </suspense>
    <h4>2. 递归组件</h4>
    <Tree :tree-data="tree">
      <template #tree="slotProps">
        {{ slotProps.content }}
      </template>
    </Tree>
    <h4>4. keepAlive组件</h4>
    <TodoList></TodoList>
    <h4>5. 动画效果</h4>
    <GroupNum></GroupNum>
    <h4>6. 自定义指令</h4>
    <Directives></Directives>
    <h4>3. 瀑布流</h4>
    <WaterFall></WaterFall>
  </Layout>
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>
