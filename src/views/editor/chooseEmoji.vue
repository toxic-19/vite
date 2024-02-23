<script setup lang="ts">
import {EmojiAliasUnicode} from './emoji'
import {defineProps, ref} from "vue"
import type {PropType} from "vue"
const props = defineProps({
  name: Array as PropType<string[]>,
  required: true
})
console.log(props.name)
const copyIcon = (key: string) => {
  const ele: HTMLTextAreaElement = document.createElement('textarea')
  ele.value = `:${key}:`
  document.body.appendChild(ele)
  ele.select() // 选中
  // const flag = document.execCommand('copy') // 使用execCommand
  navigator.clipboard.writeText(ele.value) // 使用api - clipboard
  // console.log('flag', flag)
  document.body.removeChild(ele)
}

</script>

<template>
  <div class="chooseEmoji-container">
    <div class="emoji-item" v-for="(item, key) in EmojiAliasUnicode" :key="key" @click="copyIcon(key)">
      <a-tooltip :title="`:${key}:`" color="#87d068">
        {{ item }}
      </a-tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
$namespace: "chooseEmoji";
@include block(container) {
  display: flex;
  flex-wrap: wrap;
  .emoji-item {
    width: 50px;
    margin: 10px;
    font-size: 22px;
    cursor: pointer;
  }
}
</style>
