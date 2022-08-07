<template>
  <div>
    <HomeOne />
    <!-- <HomeTwo /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
// import { getCaptcha } from '@/api/index';
import HomeOne from './homeOne/HomeOne.vue';
// import HomeTwo from './homeTwo/HomeTwo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeOne
    // HomeTwo
  },
  // setup() {},
  asyncData({ store, route }: any) {
  }
});
</script>

<style lang="less"></style>
