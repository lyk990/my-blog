<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="colLeft grid-content bg-purple">
        <div class="form">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="分类名:">
              <el-input
                v-model="formInline.categoryName"
                placeholder="请输入"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitAction">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div
        class="colRight grid-content bg-purple-light"
        style="display: flex; flex-wrap: wrap"
      >
        <div v-for="(category, index) in formInline.res" :key="index">
          <el-tag
            @close="handleClose(category)"
            :disable-transitions="false"
            closable
            style="margin-right: 10px"
            type="success"
            >{{ category }}</el-tag
          >
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup name="ArticleCategory">
import { ElMessage } from "element-plus";
import { reactive, onMounted } from "vue";
import {
  getLoginInfo,
  getArticleCategory,
  deleteArticleCategory,
} from "../../api/article";
const formInline: any = reactive({
  categoryName: "",
  res: [],
});
const submitAction = async () => {
  try {
    await getLoginInfo({ data: `${formInline.categoryName}` });
    formInline.categoryName = "";
    window.location.reload();
    ElMessage({
      message: "保存成功",
      type: "success",
    });
  } catch (error) {
    ElMessage({
      message: "保存失败",
      type: "error",
    });
  }
};
const handleClose = async (tag: any) => {
  try {
    await deleteArticleCategory({tag})
    // formInline.res.splice(formInline.res.indexOf(tag), 1);
    window.location.reload();
  } catch {}
};
onMounted(async () => {
  const form = await getArticleCategory();
  form.map((item: any) => {
    formInline.res.push(item.ArticleCategory);
  });
});
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #ffffff;
  padding-left: 30px;
  padding-top: 20px;
}

.form {
  font-size: 16px;
  display: flex;
  :deep(.el-form-item__label) {
    font-size: 16px;
  }
}
.colRight {
  padding-bottom: 20px ;
}
</style>
