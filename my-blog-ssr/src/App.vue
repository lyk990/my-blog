<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useWebSocket from '@/utils/websocket';

export default defineComponent({
  name: 'APP',
  setup() {
    onMounted(() => {
      const ws = useWebSocket(handleMessage);
    });
    const handleMessage: any = () => {
      console.log('websocket, open');
    };
    return {};
  }
});
</script>

<style lang="less" scoped>
#app {
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
