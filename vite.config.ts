import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 支持Vue解析
    Components({ // 按需导入antD
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  css: {
    preprocessorOptions: { // 预处理选项对象 配置Vue项目的预处理器选项
      scss: {
        additionalData: `@import "./src/bem.scss";`
      }
    }
  }
})
