<template>
  <div>
    登录
  </div>
</template>

<script lang="ts" setup>
import { ElForm } from "element-plus";
import { ref } from 'vue'
import type { IElform } from '../../types/element-plus'
import type { FormItemRule } from "element-plus";
// const form = ref<InstanceType<typeof ElForm> | null>(null)
const form = ref<IElform | null>(null)
const rules = ref<Record<string, FormItemRule[]>>({
  account: [{}]
})

</script>

<style lang="less" scoped>

</style>
 