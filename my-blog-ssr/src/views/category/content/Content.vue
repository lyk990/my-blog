<template>
  <div class="content">
    <div class="common-layout">
      <el-container>
        <!-- aside -->
        <el-aside width="460px">
          <!-- 折叠面板 -->
          <el-collapse v-for="(articleCategory, _id) in state.articleCategorys" :key="_id">
            <el-collapse-item :title="articleCategory.ArticleCategory" class="title" name="_id">
              <div class="article" v-for="title in state.titles" :key="title._id">
                <a
                  @click="contentAction(title.title)"
                  v-if="title.ArticleCategory == articleCategory.ArticleCategory"
                  >{{
                    title.ArticleCategory == articleCategory.ArticleCategory ? title.title : ''
                  }}</a
                >
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-aside>
        <!-- 文章区域 -->
        <el-main>
           <v-md-preview :text="str" />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { getArticleCategory, queryArticleTitle } from '@/api/category';

const state: any = reactive({
  articleCategorys: '',
  titles: []
});
const str = ref('');
onMounted(async () => {
  state.articleCategorys = await getArticleCategory();
  const data = state.articleCategorys;
  const result = await queryArticleTitle(data);
  result.map((item: any) => {
    state.titles.push(item);
  });
});
const contentAction = async (data: any) => {
  const result = state.titles.filter((item: any) => {
    return item.title === data;
  });
  str.value = result[0].content;
};
</script>
<style lang="less" scoped>
.el-aside {
  padding: 1.5rem 0;
  .el-collapse {
    border: 0;
    :deep(.el-collapse-item__header) {
      border: 0;
    }
  }
  :deep(.el-collapse-item__wrap) {
    border: 0;
  }
}
.el-container {
  height: 92vh;
  .el-aside {
    padding: 1.5rem 0;
    border-right: 1px solid #eaecef;
    :deep(.el-collapse-item__header) {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: 700;
      color: #22374d;
      transition: color 0.15s ease;
      padding: 0.35rem 1.5rem 0.35rem 1.25rem;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      border-left: 0.25rem solid transparent;
    }
    .el-collapse-item {
      // opacity: 0.5;
      // font-size: 0.95em;
      // line-height: 1.4;
      // font-weight: 400;
      // padding-left: 2rem;
      .article {
        a {
          font-size: 16px;
          font-weight: 400;
          display: inline-block;
          color: #2a5d91;
          border-left: 0.25rem solid transparent;
          padding: 0.35rem 1rem 0.35rem 1.25rem;
          line-height: 1.4;
          width: 100%;
          box-sizing: border-box;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
