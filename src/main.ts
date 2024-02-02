import { createApp } from 'vue'
import './style.css'
import 'animate.css'
// 引入路由router
import router from '@/router/index.ts'
// 导入Antd
// import setupAntd from "@/utils/antd.ts"
// 导入富文本编辑器編輯組件
import { VMdEditor, VMdPreview} from '@/server/codemirror.ts'

// 使用自定义插件
import useResize from "v-resize-zz"

import App from './App.vue'

const app = createApp(App)

// setupAntd(app)

app.use(VMdEditor)
app.use(VMdPreview)
app.use(useResize)
app.use(router) // 路由挂载

console.log('app', app)

app.mount('#app')
