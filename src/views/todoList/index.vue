<script setup lang="ts">
import Today from "./components/Today.vue"
import Plan from "./components/Plan.vue"
import {titleList} from "./todo"
import {reactive, ref} from "vue"
const activeTab = ref<number>(1)
const tabList = reactive<any[]>([
      {
        id: 1,
        name: "今天",
        imgSrc: "src/assets/todolist/today.png"
      },
      {
        id: 2,
        name: "计划",
        imgSrc: "src/assets/todolist/plan.png"
      }
])
const changeActive = (id: number) => {
  activeTab.value = id
}

</script>

<template>
  <div class="todoList-container">
    <section class="todoList-left">
      <div class="todoList-left__top">
        <div :class="{active: activeTab === item.id, item: true}" v-for="item in tabList" :key="item.id" @click="changeActive(item.id)">
          <span>{{ item.name }}</span>
          <img :src="item.imgSrc" alt=""/>
        </div>
      </div>
      <div class="todoList-left__list">
        <nav>我的列表</nav>
        <ul>
          <li v-for="(item, index) in titleList" :key="index">
            <img src="src/assets/todolist/today.png" alt="" />
            <span class="title">{{item.title}}</span>
            <span class="number">{{item.num}}</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="todoList-right">
      <keep-alive>
        <component :is="activeTab === 1 ? Today : Plan"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped lang="scss">
$namespace: "todoList";
@include block(container) {
  height: 400px;
  width: 630px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background: #111111;
  display: flex;
}
@include block(left) {
  width: 190px;
  border-radius: 10px;
  border-right: 1px solid #cccccc;
  background: #202020;
  @include ele(top) {
    padding: 50px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    .item {
      height: 44px;
      width: calc(50% - 12px);
      color: #cccccc;
      font-size: 12px;
      border-radius: 4px;
      background: #111111;
      padding: 0 4px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      &:hover {
        background: #373737;
      }
    }
    .active {
      background: #373737;
    }
    img {
      width: 30px;
    }
  }
  @include ele(list) {
    margin-top: 20px;
    color: #a1a0a0;
    nav {
      font-size: 12px;
      text-align: center;
    }
    ul {
      list-style: none;
      padding-left: 20px;
      padding-right: 12px;
      margin: 6px 0;
    }
    li {
      font-size: 13px;
      padding: 5px 0;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      img {
        width: 16px;
        object-fit: contain;
        margin-right: 6px;
      }
      .title {
        flex: 1;
      }
    }
  }
}
@include block(right) {
  flex: 1;
}
</style>
