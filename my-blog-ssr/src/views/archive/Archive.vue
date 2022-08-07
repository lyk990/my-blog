<template>
  <div class="archive">
    <Header title="归档" />
    <div class="content">
      <div class="container">
        <div class="title">
          <i class="iconfont icon-riqi" style="font-size: 50px"></i>
          <div class="title-text">2022年</div>
        </div>
        <div class="section">
          如何制作一个精美的算法动态演示图
          <div class="time">
            <i class="iconfont icon-shijian"></i>
            <span>2022/05/03</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Archive',
  asyncData({ store, route }: any) {
  }
});
</script>
<style lang="less" scoped>
.content {
  width: 30%;
  margin: 0 auto;
  margin-top: 36px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    .title-text {
      text-align: center;
      font-size: 32px;
      color: #333;
    }
  }
  .section {
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    color: #179bb2;
    margin-bottom: 12px;
    .time {
      color: #909090;
      font-size: 12px;
      margin-right: 12px;
      i {
        font-size: 12px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
