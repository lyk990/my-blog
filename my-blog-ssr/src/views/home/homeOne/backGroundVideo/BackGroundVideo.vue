<template>
  <div class="backGroundVideo">
    <div class="video">
      <video class="fullscreenVideo" id="bgVid" autoplay muted loop>
        <source src="@/assets/video/雨夜的交通.mp4" type="video/mp4" />
      </video>
      <!-- <video class="fullscreenVideo" id="bgVid" autoplay muted loop>
        <source
          src="http://rcc9z6bex.hn-bkt.clouddn.com/home/%E9%9B%A8%E5%A4%9C%E7%9A%84%E4%BA%A4%E9%80%9A.mp4?e=1653318972&token=Q9hDyA8uCYb51LJU-rYKxRyXvTTT5uuT_IWSkHXd:AlbdGYu9PxJojrMXpywzbcgM9a8="
          type="video/mp4"
        />
      </video> -->
    </div>
  </div>
</template>

<script lang="ts" setup name="BackGroundVideo">
// :style="{ width: clientWidth, height: clientHeight }"
// const clientWidth = `${document.documentElement.clientWidth}px`;
// const clientHeight = `${document.documentElement.clientHeight}px`;
</script>
<style lang="less">
@import url('@/style/home/backGroundVideo.less');
</style>
