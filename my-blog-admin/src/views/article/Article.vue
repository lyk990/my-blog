<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="16" style="display: flex">
        <el-input size="large" v-model="title" placeholder="请输入文章标题" />
        <el-select
          size="large"
          v-model="category"
          placeholder="请选择文章分类"
          style="width: 600px"
        >
          <el-option
            v-for="item in options"
            :key="item._id"
            :label="item.ArticleCategory"
            :value="item.ArticleCategory"
          />
        </el-select>
        <div style="margin: 20px 0" />
        <el-button
          v-if="route.query._id"
          style="margin-left: 20px"
          type="primary"
          size="large"
          @click="edit"
          >修改</el-button
        >
        <el-button
          v-if="!route.query._id"
          style="margin-left: 20px"
          type="primary"
          size="large"
          @click="submit"
          >保存</el-button
        >
      </el-col>
    </el-row>
    <v-md-editor v-model="text" height="600px"></v-md-editor>
  </div>
</template>

<script lang="ts" setup name="Article">
import {
  getArticleCategory,
  addArticleContent,
  findOneArticle,
  updateOneArticle,
} from "../../api/article";
import { ref, onMounted, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";

const route = useRoute();
const text = ref("");
const title = ref("");
const category = ref("");
const _id = ref()
const options: any = reactive([]);
onMounted(async () => {
  if (route.query._id) {
    const result = await findOneArticle({ data: route.query._id });
    text.value = result.content;
    title.value = result.title;
    category.value = result.ArticleCategory;
    _id.value = route.query._id
  }
  const form = await getArticleCategory();
  form.map((item: any) => {
    options.push(item);
  });
});
const submit = async () => {
  const data = { category, title, text };
  try {
    const result = await addArticleContent(data);
    if (result.code == 500) {
      ElMessage({
        message: "保存失败",
        type: "error",
      });
    } else {
      ElMessage({
        message: "保存成功",
        type: "success",
      });
    }
  } catch (error) {
    ElMessage({
      message: "保存失败",
      type: "error",
    });
  }
};
const edit = async () => {
  const data = { category, title, text, _id };
  try {
    const result = await updateOneArticle(data);
    if (result.code == 500) {
      ElMessage({
        message: "修改失败",
        type: "error",
      });
    } else {
      ElMessage({
        message: "修改成功",
        type: "success",
      });
    }
  } catch (error) {
    ElMessage({
      message: "修改失败",
      type: "error",
    });
  }
};
</script>
<style lang="less" scoped></style>
