import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // force: true,
  },
  optimizeDeps: {
    // exclude: ['lodash-es']
    include: ['lodash-es', 'vue']
  }
})
