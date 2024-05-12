<script setup lang="ts">
import {ref, onMounted, computed, defineProps} from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const vditor = ref(null)
const props = defineProps(['active'])

const active = computed({
  get(){
    if(vditor.value!=null) {
      const mode = props.active?'dark':'classic'
      console.log(mode)
      vditor.value.setTheme('dark', 'dark')
    }
    return props.active
  },
})

let content = ''
let width = 0
let height = 0
function ReInitVditor() {
  width = window.innerWidth * 0.8  < 600 ? 600 : window.innerWidth * 0.8
  height = window.innerHeight * 0.8
  vditor.value = new Vditor('vditor', {
    icon: 'material',
    height,
    width,
    placeholder: "君子藏器于身，待时而动",
    counter:{
      enable:true,
      type: 'markdown'
    },
    preview: {
      delay: 0,
      hljs: {
        style: 'monokai',
        lineNumber: true
      }
    },
    outline: {
      enable: true,
      position: 'right'
    },
    toolbarConfig: {
      pin: true
    },
    toolbar: [
      'emoji',
      'headings',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'list',
      'ordered-list',
      'check',
      'outdent',
      'indent',
      '|',
      'quote',
      'line',
      'code',
      'inline-code',
      'insert-before',
      'insert-after',
      '|',
      // 'record',
      'upload',
      'table',
      '|',
      'undo',
      'redo',
      '|',
      'fullscreen',
      'outline',
      // 'content-theme',
      'export',
      {
        name: 'more',
        toolbar: [
          'edit-mode',
          'preview',
          'both',
          'code-theme',
          // 'info',
          // 'help',
        ]
      }
    ],
    // input:(value) => {
    //   content = value
    // },
    // after: () => {
    //   // vditor.value is a instance of Vditor now and thus can be safely used here
    //   vditor.value.setValue(content)
    // }
    after() {
      const theme = localStorage.getItem('theme')
      vditor.value.setTheme(theme, theme)
    }
  })
}

const checked = ref<boolean>(false)
const changeTheme = () => {
  const mode = checked.value ? 'light' : 'dark'
  vditor.value.setTheme(mode, mode)
  localStorage.setItem('theme', mode)
}
onMounted(() => {
  window.addEventListener('resize', ReInitVditor)
  ReInitVditor()
})

</script>

<template>

  <div class="edit-container">
    <!-- 一定要在html的部分插入active,
    vue框架才会去真正监听并计算active参数-->
    <div class="btn-check">
      Dark Mode
      <a-switch v-model:checked="checked" @change="changeTheme"/>
    </div>
    <div id="vditor"></div>
  </div>
</template>


<style scoped lang="scss">
$namespace: "edit";
.btn-check {
  margin-bottom: 20px;
}
.vditor-content {
  font-size: 20px;
}
:deep(.vditor-reset) {
  @include scroll;
}
:deep(.vditor-outline li > span) {
  font-size: 14px;
  svg {
    width: 12px;
    height: 8px;
  }
}
</style>
