interface ToDO{
  time: string,
  content: string,
  done: boolean
}
export const todoList = <ToDO[]>[
  {
    time: "2023-09-10",
    content: "两栏布局的实现",
    done: true
  },
  {
    time: "2023-09-10",
    content: "两栏布局的实现",
    done: false
  },
  {
    time: "2023-09-10",
    content: "两栏布局的实现",
    done: false
  },
  {
    time: "2023-09-10",
    content: "两栏布局的实现",
    done: false
  }
]

export const titleList = [
  {
    title: '日常计划',
    num: 1
  },
  {
    title: '奇招计划',
    num: 1
  },
  {
    title: '攻克计划',
    num: 12
  }
]

export const mdContent = "## 1. `vue3 `基本概念\n\n:punch: [语雀：vue3视频快记](https://www.yuque.com/toxic-19/vue522/gdizhg63ym2iec01)\n\n:punch: [Vue3官网](https://cn.vuejs.org/guide/quick-start.html)\n\n:punch: [视频资料](https://blog.csdn.net/qq1195566313/category_11618172.html)\n\n### 1.1 安装项目\n\n```sh\nnpm init vite@latest # 直接安装vite+vue3项目\nyarn create vite     # 使用yarn安装\nnpm init vue@latest # 通过vue-cli脚手架安装 配置更全\n# 使用npm create创建失败了。\n```\n\n目录结构：\n\n```sh\npublic # 不会被编译 可以存放静态资源\nsrc\n ├─assets # 存放可以编辑的静态资源\n ├─components\n ├─App.vue # 全局组件\n └─main.ts # 全局ts\nindex.html # 入口文件\nvite.config.ts # vite的配置文件\n```\n\n`npm run dev` 详解\n\n会在`node_modules/.bin`下创建可执行文件，执行`npm run dev`时，就可以在`package.lock.json`中查找到脚本链接\n\n![Description](https://gitee.com/zhizhu_wlz/image-for-md/raw/master/image-20230821234619971.png)\n\n```json\n\"node_modules/vite\": {\n    \"version\": \"4.4.9\",\n    \"resolved\": \"https://registry.npmmirror.com/vite/-/vite-4.4.9.tgz\",\n    \"integrity\": \"sha512-2mbUn2LlUmNASWwSCNSJ/EG2HuSRTnVNaydp6vMCm5VIqJsjMfbIWtbH2kDuwUVW5mMUKKZvGPX/rqeqVvv1XA==\",\n    \"dev\": true,\n    \"dependencies\": {\n        \"esbuild\": \"^0.18.10\",\n        \"postcss\": \"^8.4.27\",\n        \"rollup\": \"^3.27.1\"\n    },\n    \"bin\": {\n        \"vite\": \"bin/vite.js\" # 找到该js文件，然后执行该脚本\n    }\n}\n```"
