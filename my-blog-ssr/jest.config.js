module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest', // ts 文件用 ts-jest 转换
    '^.+\\.[t|j]s?$': 'babel-jest' // jest使用babel
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$', // 设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
  // testMatch: ['**/tests/**/*.spec.js', '**/__tests__/**/*.spec.js'], // 设置识别哪些文件是测试文件（正则形式），与testMatch互斥，不能同时写
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 匹配@使用路径
  },
  clearMocks: true,
  coverageDirectory: 'coverage'
};
