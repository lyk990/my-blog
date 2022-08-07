import type { RouteRecordRaw } from 'vue-router';
import { defineComponent } from 'vue';

export interface RouteMeta {
  title?: string;
}

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw {
  path: string;
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  children?: AppRouteRecordRaw[];
}
