import { RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/article',
    name: 'Article',
    component: RouterView, // 父路由组件路径不能为空
    meta: {
      title: '文章管理'
    },
    children: [
      {
        path: 'articleCategory',
        name: 'ArticleCategory',
        component: () => import('../../views/article/ArticleCategory.vue'),
        meta: {
          title: '文章分类'
        }
      },  
      {
        path: 'articleList',
        name: 'ArticleList',
        component: () => import('../../views/article/ArticleList.vue'),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../../views/article/Article.vue'),
        meta: {
          title: '文章编辑'
        }
      },
    ]
  }
]

export default routes