<template>
  <div class="center">
    <div class="content">
      <div class="title">我的个人博客</div>
      <div class="text">
        <div>编程</div>
        <div>.</div>
        <div>想法</div>
        <div>.</div>
        <div>分享</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Center"></script>
<style lang="less" scoped>
.center {
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 700px;
  cursor: pointer;
  .title {
    font-size: 50px;
    // font-weight: 100;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 10px;
  }
  .text {
    font-size: 22px;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    div {
      width: 100px;
      text-align: center;
    }
  }
}
</style>
