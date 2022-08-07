import { createRouter, createWebHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; // npm i @types/nprogress类型补充
import category from './modules/category';
import archive from './modules/archive';
import share from './modules/share';
import login from './modules/login';
import register from './modules/register';

// 常量路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404.vue')
  },
  ...login,
  ...register
];
// 异步路由
export const allAsyncRoutes: Array<RouteRecordRaw> = [...archive, ...share, ...category];
// 任意路由
export const anyRoute: Array<RouteRecordRaw> = [{ path: '/:pathMatch(.*)', redirect: '/404' }];

export default function createSSRRouter() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: constantRoutes
  });
}

export const router = createSSRRouter();
