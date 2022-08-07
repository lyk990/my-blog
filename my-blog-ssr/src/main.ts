import { createSSRApp } from 'vue';
import '@/style/resetcss.css';
// markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
import { sync } from 'vuex-router-sync';
import ElementPlus from 'element-plus';
import createSSRRouter from './router/index';
import { createSSRStore, key } from './store';
import App from './App.vue';
import Header from '@/components/header/Header.vue';
import 'element-plus/dist/index.css';

VMdPreview.use(vuepressTheme, {
  Prism
});
// const app = createApp(App);

export default function createApp() {
  const app = createSSRApp(App);
  const store = createSSRStore();
  const router = createSSRRouter();
  sync(store, router);
  app.use(router);
  app.use(store, key);
  app.use(VMdPreview);
  app.use(ElementPlus);
  app.component('Header', Header);
  return { app, router, store };
}
