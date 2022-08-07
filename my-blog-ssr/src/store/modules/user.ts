import { allAsyncRoutes, constantRoutes, anyRoute, router } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';
import { setItem } from '@/utils/storage';

interface IFabpRole {
  archive: Boolean;
  article: Boolean;
  share: Boolean;
}

const filterAsyncRoutes = (allAsyncRoutes: any, routeNames: any) => {
  return allAsyncRoutes.filter((item: any) => {
    for (let key in routeNames) {
      if (!routeNames[key]) {
        delete routeNames[key];
      }
    }
    const route = Object.keys(routeNames);
    if (route.indexOf(item.name) !== -1) {
      if (item.children && item.children.length) {
        item.children = filterAsyncRoutes(item.children, routeNames);
      }
      return true;
    }
  });
};

const state = {
  abpRole: [],
  routes: []
};
const mutations = {
  abpRoleSet(state: object | any, abpRole: IFabpRole) {
    state.abpRole = abpRole;
  },
  async setRoutes(state: object | any, allAsyncRoutes: Array<RouteRecordRaw>) {
    state.routes = allAsyncRoutes.concat(constantRoutes, anyRoute);
    setItem('topBar', state.routes);
    // 动态添加注册路由
    // router.addRoute([...allAsyncRoutes, ...anyRoute]);
    const allRoutes = [...allAsyncRoutes, ...anyRoute];
    allRoutes.forEach((item) => {
      router.addRoute(item as unknown as RouteRecordRaw);
    });
  }
};
const actions = {
  async abpRolePersmission(context: any, abpRole: IFabpRole) {
    context.commit('abpRoleSet', abpRole);
    context.commit(
      'setRoutes',
      filterAsyncRoutes(JSON.parse(JSON.stringify(allAsyncRoutes)), abpRole)
    );
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
// user
