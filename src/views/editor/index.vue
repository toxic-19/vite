<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import {onMounted, ref} from "vue"
import {EmojiAliasUnicode} from './emoji'
const vditor = ref()
onMounted(() => {
  vditor.value = new Vditor('editor', {
    height: '80vh',
    width: '80vw', // 默认即时渲染
    placeholder: '请输入markdown语法内容',
    toolbar: [
      'emoji' , 'headings' , 'bold' , 'italic' , 'strike' ,
      '|' , 'line' , 'quote' , 'list' , 'ordered-list' , 'check',
      'outdent' ,'indent' , 'code' , 'inline-code' , 'insert-after' , 'insert-before' ,'undo' ,
      'redo' , 'upload' , 'link' , 'table' ,  'edit-mode' , 'both', 'preview' ,
      'fullscreen' , 'outline' , 'code-theme' , 'export', 'help'
    ],
    hint: {
      emoji: EmojiAliasUnicode
    },
    outline: {
      enable: true,
      position: 'right'
    }
    // counter: {
    //   enable: true,
    //   type: 'markdown'
    // }
  })
})
</script>

<template>
  <div id="editor"></div>
  <div id="preview"></div>
</template>

<style scoped lang="scss">
$namespace: "editor";
</style>
