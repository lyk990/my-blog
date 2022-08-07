import { createStore, useStore as baseUseStore, Store } from 'vuex';
import user from './modules/user';
import { InjectionKey } from 'vue';

export interface State {
user: any;
  count: number;
  // abpRole: [];
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('storeKey');

export function createSSRStore() {
  return createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      user
    }
  });
}

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
