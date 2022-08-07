import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'
import 'element-plus/dist/index.css'

// md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
// 加载全局样式
import './styles/index.scss'
const app = createApp(App)
app.use(router).mount('#app')
app.use(store)
app.use(store, key)
app.use(elementPlus)
app.use(VueMarkdownEditor);