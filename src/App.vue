<!-- setup形式的script只能出现一个 非setup形式的script可以出现多个 -->
<script setup lang="ts">
import Layout from "./Layout/index.vue" // setup下不需要注册
import WaterFall from "./views/waterFall/index.vue"
import TodoList from "./views/todoList/index.vue"

import Tree from "./components/Tree.vue"
import GroupNum from "./views/groupNum/index.vue"
import Directives from "./views/directives/index.vue"
import OwnHooks from "./views/ownHooks/index.vue"
import Resize from "./views/useResize/index.vue"
import { reactive, defineAsyncComponent, getCurrentInstance } from "vue"
// 引入异步组件

// const instance = getCurrentInstance()
// instance.proxy.$loadings.show()
</script>

<template>
  <router-view></router-view>
  <!--  <h4>1. 异步组件</h4>-->
  <!--  <h4>2. 递归组件</h4>-->
  <!--  <Tree :tree-data="tree">-->
  <!--    <template #tree="slotProps">-->
  <!--      {{ slotProps.content }}-->
  <!--    </template>-->
  <!--  </Tree>-->
  <!--  <h4>4. keepAlive组件</h4>-->
  <!--  <TodoList></TodoList>-->
  <!--  <h4>5. 动画效果</h4>-->
  <!--  <GroupNum></GroupNum>-->
  <!--  <h4>6. 自定义指令</h4>-->
  <!--  <Directives></Directives>-->
  <!--  <h4>7. 自定义Hook: 图片转base64</h4>-->
  <!--  <OwnHooks></OwnHooks>-->
  <!--  <h4>8. 使用自定义插件</h4>-->
  <!--  <Resize></Resize>-->
  <!--  <h4>3. 瀑布流</h4>-->
  <!--  <WaterFall></WaterFall>-->
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>
