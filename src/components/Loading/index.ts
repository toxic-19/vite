// 插件的编写
import type {App, VNode} from "vue"
import Loading from './index.vue'
import {createVNode, render} from "vue";
export default {
  install(app: App) { // Vue.use()时调用
    const vnode: VNode = createVNode(Loading) // 创建一个虚拟dom
    render(vnode, document.body) // 挂载到body上
    // console.log('install', vnode.component?.exposed) // 暴露出组件expose的值
    app.config.globalProperties.$loadings = {
      show: vnode.component?.exposed.show,
      hide: vnode.component?.exposed.hide
    }
   // app.config.globalProperties.$loadings.show()
  }
}
