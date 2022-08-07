import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('@/views/archive/Archive.vue'),
    meta: {
      title: '归档'
    }
  }
];

export default routes;
