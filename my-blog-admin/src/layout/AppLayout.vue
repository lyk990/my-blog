<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenuVue></AppMenuVue>
      </el-aside>
      <el-container>
        <el-header><Breadcrumb /></el-header>
        <el-main>
          <!--子路由出口-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppMenuVue from "./components/AppMenu.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
</script>

<style lang="scss" scoped>
.el-header {
  --el-header-height: 80px;
  background-color: #ffffff;
  height: var(--el-header-height);
  display: flex;
  align-items: center;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  width: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-container {
  height: 100vh;
}
</style>
