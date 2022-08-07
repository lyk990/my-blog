// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    title?: string;
    // 每个路由都必须声明
  }
}
