import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/regiser',
    name: 'Register',
    component: () => import('../../views/register/Register.vue'), 
    meta: {}
  }
];

export default routes;
