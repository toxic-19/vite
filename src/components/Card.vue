<script setup lang="ts">
import {defineProps} from "vue";

defineProps<{title: string}>()
</script>

<template>
  <div class="card-container">
    <header class="card-header">
      <div class="card-header__title">{{title}}</div>
      <div class="card-header__sub-title">副标题</div>
    </header>
    <section class="card-section">
      <div class="card-section__content">
        <slot name="content"></slot> <!-- 具名插槽 使用在template下 v-slot:content 简写形式 #content -->
        <!-- 动态插槽名，在父组件中使用：v-slot:[slotName] 同 #[slotName] -->
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
$borderColor: #ccc;
$namespace: "card";
@include block(container) {
  width: 360px;
  box-shadow: 1px 1px 2px 1px $borderColor;
  transition: all 0.4s;
  &:hover {
    box-shadow:0 0 10px 6px $borderColor;
  }
}
@include block(header) {
  padding: 10px;
  border-bottom: 1px solid $borderColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include ele(title) {}
  @include ele(sub-title) {
    color: #777777;
    font-size: 14px;
  }
}
@include block(section) {
  padding: 10px;
}
</style>
