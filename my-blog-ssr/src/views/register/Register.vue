<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>个人博客注册</span>
        </div>
      </template>
      <el-input size="large" v-model="userName" placeholder="请输入用户名" />
      <el-input size="large" v-model="password1" placeholder="请输入密码" />
      <!-- <el-input size="large" v-model="password2" placeholder="请确认密码" /> -->
      <div style="display: flex">
        <el-input size="large" v-model="verification" placeholder="请输入验证码" />
        <el-button @click="validationAction" size="large" style="margin-left: 20px"
          >点击发送验证码</el-button
        >
      </div>
      <el-button @click="submit" type="primary" size="large" style="width: 100%">注册</el-button>
      <div class="footer">
        <div @click="$router.push('/')">回首页</div>
        <div @click="$router.push('/login')">登录</div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="Register">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { apiverificationCode, apiregister } from '@/api/users';
import { useRouter } from 'vue-router';
const userName = ref('');
const password1 = ref('');
const verification = ref('');
const router = useRouter()
const validationAction = async () => {
  const result = await apiverificationCode();
  verification.value = result;
};
const submit = async () => {
  const data = { userName, password: password1 };
  const result = await apiregister(data);
  if (result.code == 200) {
    ElMessage.success('注册成功');
    router.push('/login')
  }
};
</script>
<style lang="less" scoped>
.login {
  background: url('@/assets/images/登录注册.jpg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    background: none;
    border: 0;
    width: 560px;
    :deep(.el-card__header) {
      border: 0;
      display: flex;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
  :deep(.el-input) {
    background: none;
    margin-bottom: 20px;
    .el-input__inner {
      background: none;
      box-shadow: 0 0 0 1px rgb(132, 128, 128);
      color: rgb(27, 26, 26);
      font-size: 16px;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>
