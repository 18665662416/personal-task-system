<template>
  <div class="tasks-container">
    <h2>任务列表</h2>
    <el-button type="primary" @click="dialogVisible = true">新建任务</el-button>
    
    <el-table :data="tasks" style="margin-top: 20px">
      <el-table-column prop="title" label="任务名称" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag :type="row.completed ? 'success' : 'warning'">
            {{ row.completed ? '已完成' : '进行中' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="small" @click="editTask(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteTask(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const tasks = ref([
  { id: 1, title: '完成项目文档', category: '工作', completed: false },
  { id: 2, title: '学习Vue3', category: '学习', completed: true }
])

const editTask = (row) => {
  console.log('编辑任务:', row)
}

const deleteTask = (row) => {
  console.log('删除任务:', row)
}
</script>
