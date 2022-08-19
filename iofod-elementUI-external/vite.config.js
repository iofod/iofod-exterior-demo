import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus(), viteExternalsPlugin({
    vue: 'Vue',
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      formats: ["es"],
      fileName: `index`
    },
  },
  define: { 'process.env': {} }
})
