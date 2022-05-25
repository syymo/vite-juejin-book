# vite-juejin-book
掘金《深入浅出 Vite》小册，学习并且记录，本项目使用`vue3`，并非小册中的`react`

## 此处记录问题，并更新解决方案

### 01.vite-css(小册：4.样式方案：在 Vite 中接入现代化的 CSS 工程化方案)

- [ ] tailwindcss、windicss均不能生效

### 02.vite-lint(小册：5.代码规范: 如何利用 Lint 工具链来保证代码风格和质量？)

- [ ] `pnpm run dev`之后`vite-plugin-eslint`不生效

### 03.vite-static(小册：6.静态资源: 如何在 Vite 中处理各种静态资源？)

- [x] `pnpm i vite-plugin-imagemin -D`安装失败，https://juejin.cn/post/6996187604337033252
    官方建议：用于安装imagemin的依赖关系，因为中国可能没有安装imagemin
    ```
    package.json：
    "resolutions": {
        "bin-wrapper": "npm:bin-wrapper-china"
    },
    ```
