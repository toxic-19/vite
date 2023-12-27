<script setup lang="ts">
import {axios} from "@/server/axios"
interface Data {
  data: {
    nickName: string,
    status: string,
    url: string,
    content: string
  }
}
const {data} = await axios.get<Data>('/data.json')
</script>

<template>
  <div class="card-container">
    <header class="card-header">
      <img src="../assets/avatar.jpg" alt="">
      <div class="card-header__user-info">
        <div class="nick-name">{{data.nickName}}</div>
        <div class="status">{{data.status}}</div>
      </div>
      <div class="card-header__follow-btn">关注</div>
    </header>
    <section class="card-section">
      <div class="card-section__content">
        <slot name="content">
          {{data.content}}
        </slot> <!-- 具名插槽 使用在template下 v-slot:content 简写形式 #content -->
        <!-- 动态插槽名，在父组件中使用：v-slot:[slotName] 同 #[slotName] -->
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
$borderColor: #ccc;
$namespace: "card";
@include block(container) {
  width: 60%;
  border: 1px solid $borderColor;
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
  img {
    width: 66px;
    border-radius: 50%;
  }
  @include ele(user-info) {
    flex: 1;
    margin-left: 20px;
    .nick-name {
      color: #023259;
      font-size: 18px;
      font-family: Consolas, serif;
    }
    .status {
      color: #777777;
      padding-top: 6px;
      font-family: 华文行楷, serif;
    }
  }
  @include ele(follow-btn) {
    font-family: 华文新魏, "Segoe UI Light", serif;
    padding: 2px 10px;
    border-radius: 18px;
    border: 1px solid $borderColor;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      border-color: #213547;
    }
  }
}
@include block(section) {
  padding: 10px;
}
</style>
