module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        // 1. 接入 prettier 的规则
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        // 2. 加入 prettier 的 eslint 插件
        'prettier',
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        // 3. 注意要加上这一句，开启 prettier 自动修复的功能
        'prettier/prettier': [
            'error',
            // {
            //     'array-element-newline': ['error', 'consistent'],
            // },
        ],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
    },
};
