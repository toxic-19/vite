import { createApp } from 'vue'
import './style.css'
// 导入Antd
// import setupAntd from "@/utils/antd.ts"
// 导入富文本编辑器編輯組件
import { VMdEditor, VMdPreview} from '@/server/codemirror.ts'

import App from './App.vue'

const app = createApp(App)

// setupAntd(app)

app.use(VMdEditor)
app.use(VMdPreview)
app.mount('#app')
