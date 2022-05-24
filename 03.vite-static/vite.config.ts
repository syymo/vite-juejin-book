import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// svg
import viteSvgLoader from 'vite-svg-loader';

// 图片压缩  安装失败：pnpm i vite-plugin-imagemin -D --ignore-scripts
import viteImagemin from 'vite-plugin-imagemin'

// 雪碧图优化
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 是否为生产环境，在生产环境一般会注入 NODE_ENV 这个环境变量，见下面的环境变量文件配置
const isProduction = process.env.NODE_ENV === 'production';
// 填入项目的 CDN 域名地址
const CDN_URL = 'https://cdn.example.com';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgLoader(),
    // 忽略前面的插件
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, 'src/assets/icons')]
    })
  ],
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  json: {
    stringify: true
  },
  base: isProduction ? CDN_URL: '/',
  build: {
    // 8 KB
    /**
     * Vite 中内置的优化方案是下面这样的:
      如果静态资源体积 >= 4KB，则提取成单独的文件
      如果静态资源体积 < 4KB，则作为 base64 格式的字符串内联

     * 上述的8 KB即为提取成单文件的临界值
     */
    assetsInlineLimit: 8 * 1024
  }
})
