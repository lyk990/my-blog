import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend(), viteCompression()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置@ 指向 src目录
    }
    //  extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] //忽略后缀
  },
  base: './', // 设置打包路径
  server: {
    // port: 4000, // 端口号
    // open: false, // 是否自动打开浏览器
    // cors: true, // 允许跨域
    hmr: true,
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
});
