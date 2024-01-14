<script setup lang="ts">
import {ref} from "vue"
import _ from "lodash"
let numItems = ref(Array.from({length: 81}).map((_, index) => {
  return {id: index, number: (index % 9) + 1}
}))
const shuffle = () => {
  numItems.value = _.shuffle(numItems.value) // shuffle: 创建一个被打乱值的集合。
}
</script>

<template>
  <a-button @click="shuffle">change</a-button>
  <div class="group-container">
    <transition-group tag="ul" name="change">
      <li v-for="num in numItems" :key="num.id">{{num.number}}</li>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
$namespace: "group";
@include block(container) {
  width: 600px;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: calc((600px - 40px) / 10);
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #cccccc;
    margin: 2px;
    cursor: pointer;
  }
}
.change-move {
  transition: transform 0.8s ease;
}
</style>
