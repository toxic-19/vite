import { createApp } from 'vue'
import './style.css'
// 导入Element-Plus
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
// 导入富文本编辑器
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import highlight from 'highlight.js'

VMdEditor.use(githubTheme, {
  Hljs: highlight
})
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VMdEditor)
app.mount('#app')
