import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/share',
    name: 'Share',
    component: () => import('@/views/share/Share.vue'),
    meta: {
      title: '分享'
    }
  }
];

export default routes;
