/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import createApp from '@/main';
import { allAsyncRoutes, constantRoutes, anyRoute } from '@/router/index';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useStore } from '@/store';
import { ElMessage } from 'element-plus';
const { app, router, store } = createApp();
router.isReady().then(() => {
  router.beforeResolve((to, from, next) => {
    const toComponents = router
      .resolve(to)
      .matched.flatMap((record) => Object.values(record.components));
    const fromComponents = router
      .resolve(from)
      .matched.flatMap((record) => Object.values(record.components));
    const actived = toComponents.filter((c, i) => {
      return fromComponents[i] !== c;
    });
    if (!actived.length) {
      return next();
    }
    Promise.all(
      actived.map((Component: any) => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          });
        }
      })
    ).then(() => {
      next();
    });
  });

  // 全局路由守卫
  router.beforeEach(async (to, from, next) => {
    if (!store.state.user.routes.length || !to.fullPath) {
      const allRoutes = [...allAsyncRoutes, ...anyRoute];
      allRoutes.forEach((item) => {
        router.addRoute(item as unknown as RouteRecordRaw);
      });
      next()
    } else {
      next();
    }
  });
  router.afterEach(() => {});
  // router.onReady((to, from, next) => {
  //   if (!store.state.user.routes.length || !to.fullPath) {
  //     const allRoutes = [...allAsyncRoutes, ...anyRoute];
  //     allRoutes.forEach((item) => {
  //       router.addRoute(item as unknown as RouteRecordRaw);
  //     });
  //     next()
  //   } else {
  //     next();
  //   }
  // })
  app.mount('#app', true);
});

// eslint-disable-next-line no-underscore-dangle
if (window.__INITIAL_STATE__) {
  // eslint-disable-next-line no-underscore-dangle
  store.replaceState(window.__INITIAL_STATE__);
}
