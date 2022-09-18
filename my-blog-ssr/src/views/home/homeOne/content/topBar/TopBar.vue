<template>
  <header class="topBar">
    <div class="left">
      <i class="iconfont icon-zhihu"></i>
      <i class="iconfont icon-github-fill"></i>
      <i class="iconfont icon-juejin"></i>
    </div>
    <div class="center">
      <div>首页</div>
      <template v-for="(item, index) in routeMetaTitle.topBar" :key="index">
        <div v-if="!!item?.meta?.title" @click="routePush(item)">
          {{ item?.meta?.title }}
        </div>
        </template
      >
    </div>
    <div class="right">
      <div class="login" @click="$router.push('/login')">
        <a>登录</a>
      </div>
      <div class="register" @click="$router.push('/regiser')">
        <a>注册</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, createApp, ref, reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
import { getItem } from '@/utils/storage';
import { cloneDeep } from 'lodash'

export default defineComponent({
  name: 'TopBar',
  asyncData({ store, route }: any) {},

  setup() {
    onMounted(() => {
      routeMetaTitle.topBar = cloneDeep(JSON.parse(window.localStorage.topBar))
      const store = useStore()
    });
    const router = useRouter();
    let routeMetaTitle: any = reactive({
      topBar: []
    })

    const routePush = (item: any) => {
      router.push(item.path);
    };
    return {
      routePush,
      routeMetaTitle
    };
  }
});
</script>
<style lang="less" scoped>
@import url('@/style/home/topBar/topBar.less');
</style>
