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
  },
  server: {
    port: 4000,
    host: "0.0.0.0",
    open: true,
    proxy: {
      '^/api': {
        target: 'https://www.fastmock.site/mock/1f9f19ae92bb7910af122a5c362efc5e/react_vite',
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", '/api')
      },
    }
  }
})
