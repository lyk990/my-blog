<template>
  <div>
    <el-row style="margin-bottom: 10px; padding: 20px; background-color: #fff">
      <el-col :span="16" style="display: flex">
        <el-button
          type="primary"
          size="large"
          @click="$router.push('./article')"
          >新建文章</el-button
        >
      </el-col>
      <el-col :span="8" style="display: flex">
        <el-input
          style="margin-right: 20px"
          size="large"
          v-model="title"
          placeholder="请输入标题"
        />
        <el-button type="primary" size="large">查询</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-card>
      <el-table
        :header-cell-style="{ background: '#f5f7fa' }"
        :data="tableData"
        :row-style="{ height: '57px' }"
        :cell-style="{ padding: '0' }"
        class="table"
      >
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="ArticleCategory" label="分类" />
        <el-table-column prop="" label="标签" />
        <el-table-column prop="" label="阅读量">
          <template #default>
            <el-tag>48</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="" label="评论">
          <template #default>
            <el-switch
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布时间" />
        <el-table-column prop="" label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="ArticleList">
import { ref, onMounted, reactive } from "vue";
import { queryAllArticle, deleteArticle } from "../../api/article";
import { useRouter } from "vue-router";

const router = useRouter();
const title = ref("");
const value2 = ref(true);
const handleEdit = async (row: any) => {
  const data = row._id;
  // const result = await updateOneArticle({ data });
  // console.log(result)
  router.push({
    path: "./article",
    query: {
      _id: data,
    },
  });
};
const handleDelete = async (row: any) => {
  const data = row._id;
  await deleteArticle({ data });
  window.location.reload();
};
const tableData: any = reactive([]);
onMounted(async () => {
  const result = await queryAllArticle();
  result.map((item: any) => {
    tableData.push(item);
  });
});
</script>
<style lang="less" scoped>
.table {
  :deep(.el-table__body-wrapper) {
    .el-table__body {
      .cell {
        font-size: 14px;
      }
    }
  }
}
</style>
