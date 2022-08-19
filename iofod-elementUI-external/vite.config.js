import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      formats: ["es"],
      fileName: `index`
    },
  },
  define: { 'process.env': {} }
})
