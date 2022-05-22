import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path'

// 全局 scss 文件的路径
const variablePath = path.resolve(__dirname, './src/assets/style/variable.scss')

// autoprefixer
import autoprefixer from 'autoprefixer';

// windi css 原子
import windicss from 'vite-plugin-windicss'
import tailwindcss from 'tailwindcss'

import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录位置
  // root: path.join(__dirname, 'src'),
  plugins: [
    vue(),
    vueJsx(),
    tailwindcss(),
    windicss(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:8]"
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'chrome > 40', 'ff > 31', 'ie 10'
          ]
        })
      ]
    }
  }
})
