module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量。
    es2021: true,
    node: true // Node.js 全局变量和 Node.js 作用域。
  },
  // 继承共享的配置
  extends: [
    'vue-global-api',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-prettier',
    'vue-global-api',
    'airbnb-base', // airbnb检查
    'plugin:vue/essential',
    'plugin:prettier/recommended', // 添加 prettier 插件
    'plugin:jest/recommended' // 配置eslint忽略jest的语法检查
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  /**
   *  关闭: "off"或者0 警告: "warn"或者1 错误: "error"或者2
   */
  rules: {
    'prettier/prettier': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用debugger
    'no-undef': 'off', // 不能有未定义的变量
    'no-multi-spaces': 'error', // 禁止多个空格
    '@typescript-eslint/no-var-requires': 0,
    /**
     * eslint-plugin-vue
     * https://eslint.vuejs.org/rules
     * 此规则包含 "plugin:vue/vue3-recommended"
     */
    'vue/no-v-html': 'off', // 不使用v-html
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multiline-html-element-content-newline': 'off', // 强制在多行元素的内容前后加换行符
    'vue/singleline-html-element-content-newline': 'off', // 强制在单行元素的内容前后加换行符
    // Vue.js风格指南 https://v3.cn.vuejs.org/style-guide/
    // Vue组件排序
    'vue/order-in-components': [
      'warn',
      {
        order: ['el', 'name', 'key', 'parent', 'functional']
      }
    ],
    // Vue属性排序
    'vue/attributes-order': [
      'warn',
      {
        order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS']
      }
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 0,
    'vue/multi-word-component-names': 0,
    'no-unused-vars': 1, // 变量定义未使用
    'array-callback-return': 0,
    'import/prefer-default-export': 0,
    eqeqeq: 0
  }
};
