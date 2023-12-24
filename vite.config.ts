import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 支持Vue解析
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
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
