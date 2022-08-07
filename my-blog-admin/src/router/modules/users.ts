import { RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/users",
    name: "Users",
    component: () => import('../../views/users/Users.vue'), // 父路由组件路径不能为空
    meta: {
      title: "角色管理",
      breadWeight: true
    },
  },
];

export default routes;
