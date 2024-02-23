<script setup lang="ts">
import Vditor from 'vditor'
import MarkdownIt from 'markdown-it'
import 'vditor/dist/index.css'
import {onMounted, ref} from "vue"
import MarkdownEdit from './components/MarkdownEdit.vue'
// import ChooseEmoji from './chooseEmoji.vue'
let vditor: any
const html = ref('')
onMounted(() => {
  initEditor()
})

const initEditor = () => {
  vditor = new Vditor('editor', {
    height: '80vh',
    width: '80vw', // 默认即时渲染
    placeholder: '请输入markdown语法内容',
    toolbar: [
      'emoji', 'headings', 'bold', 'italic', 'strike', 'link',
      '|', 'list', 'ordered-list', 'check', 'outdent', 'indent', '|',
      'quote', 'line', 'code', 'inline-code', 'insert-before', 'insert-after', '|',
      'upload',  'table',  'edit-mode',  'undo', 'redo',
      'fullscreen', 'outline', 'export',
    //    'preview', 'help', 'both', 'code-theme',
    ],
    hint: {
      emoji: {
        "+1": "👍",
        "-1": "👎",
        "100": "💯",
        "1234": "🔢",
      }
    },
    outline: {
      enable: true,
      position: 'right'
    },
    toolbarConfig: {
      pin: true
    },
    // 编辑器失去焦点后的回调函数
    blur: (value) => {
      // 保存文档....
      console.log('保存成功', value)
    }
  })
}

const getContent = () => {
  if (vditor) {
    const content = vditor.getValue()
    console.log('获取到的内容：', content)
    html.value = new MarkdownIt().render(content)
    vditor.setTheme('dark', 'dark')
  } else {
    console.error('Vditor 实例尚未初始化')
  }
}
</script>

<template>
<!--  <div id="editor"></div>-->
<!--  <button @click="getContent">内容获取</button>-->
<!--  <ChooseEmoji></ChooseEmoji>-->
<!--  <div id="preview" v-html="html"></div>-->
  <markdown-edit :active="true"></markdown-edit>
</template>

<style scoped lang="scss">
$namespace: "editor";
</style>
