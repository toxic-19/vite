<script setup lang="ts">
import { todoList } from "../todo"
</script>

<template>
  <header class="today-title">今日</header>
  <section class="today-list">
    <div class="today-list__item" v-for="item in todoList" @click="handleChecked(item)">
      <input v-model="item.done" type="radio"> <span>{{item.content}}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
$namespace: "today";
@include block(title) {
  height: 44px;
  line-height: 44px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bolder;
  padding-left: 12px;
  border-bottom: 1px solid #b4b4b4;
}
@include block(list) {
  @include ele(item) {
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    color: #ffffff;
  }
  :deep(.el-radio.el-radio--large .el-radio__inner) {
    background: transparent;
  }
  :deep(.el-radio.el-radio--large .el-radio__label) {
    color: #bcbcc0;
  }
}
</style>
