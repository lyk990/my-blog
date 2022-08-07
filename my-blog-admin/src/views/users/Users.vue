<template>
  <div>
    <el-card>
      <el-table
        :header-cell-style="{ background: '#f5f7fa' }"
        :data="tableData"
        :row-style="{ height: '57px' }"
        :cell-style="{ padding: '0' }"
        class="table"
      >
        <el-table-column prop="_id" label="id" />
        <el-table-column prop="name" label="用户名" />
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
    <el-drawer
      v-model="drawer"
      title="权限控制"
      direction="rtl"
      :before-close="handleClose"
    >
      <el-checkbox v-model="category" label="分类" size="large" />
      <el-checkbox v-model="archive" label="归档" size="large" />
      <el-checkbox v-model="share" label="分享" size="large" />
      <template #footer>
        <el-button size="large" @click="handleCancle()">取消</el-button>
        <el-button size="large" type="primary" @click="handleSubmit()"
          >保存</el-button
        >
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup name="user">
import { ref, onMounted, reactive } from "vue";
import {
  postRolePermission,
  getQueryRole,
  postDeleteRole,
} from "../../api/role";
import { ElMessage } from "element-plus";
const category = ref(false);
const archive = ref(false);
const share = ref(false);
const drawer = ref(false);
const _id = ref("");
const handleClose = (done: () => void) => {
  drawer.value = false;
};
let tableData = ref([]);
onMounted(async () => {
  const result = await getQueryRole();
  tableData.value = result;
});
const handleEdit = (row: any) => {
  drawer.value = true;
  _id.value = row._id;
};
const handleDelete = async (row: any) => {
  const data = { _id: row._id };
  await postDeleteRole(data);
  window.location.reload();
};
const handleCancle = () => {};
const handleSubmit = async () => {
  const abpRole = {
    category: category.value,
    archive: archive.value,
    share: share.value,
  };
  const data = {
    abpRole,
    _id: _id.value,
  };
  try {
    const result = await postRolePermission(data);
    if (result.code != 200) return;
    ElMessage({
      message: "保存成功",
      type: "success",
    });
    drawer.value = false;
  } catch (error) {}
};
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
