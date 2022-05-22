import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteEslint({
            // include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
        viteStylelint({
            exclude: /windicss|node_modules/,
        }),
        vue(),
    ],
});
