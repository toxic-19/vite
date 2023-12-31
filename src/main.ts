import { createApp } from 'vue'
import './style.css'
// 导入Element-Plus
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
// 导入富文本编辑器編輯組件
import { VMdEditor, VMdPreview} from '@/server/codemirror.ts'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VMdEditor)
app.use(VMdPreview)
app.mount('#app')
