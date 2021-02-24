import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",//打包路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    port: 8888,
    open: true,
    proxy: {
      "/api": "http://114.55.97.226"
    },
    cors: true
  }
})
