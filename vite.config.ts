import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //配置全局Scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sassConfig.scss";`
      },
      styl: {
        additionalData: `@import "./src/styles/sassConfig.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
