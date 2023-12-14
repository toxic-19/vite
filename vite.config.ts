import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 支持Vue解析
  css: {
    preprocessorOptions: { // 预处理选项对象 配置Vue项目的预处理器选项
      scss: {
        additionalData: `@import "./src/bem.scss";`
      }
    }
  }
})
