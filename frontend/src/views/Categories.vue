<template>
  <div>
    <h2>分类管理</h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="cat in categories" :key="cat.id">
        <el-card>
          <template #header>
            <span :style="{ color: cat.color }">{{ cat.name }}</span>
          </template>
          <p>任务数量: {{ cat.count }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
  { id: 1, name: '工作', color: '#409EFF', count: 5 },
  { id: 2, name: '学习', color: '#67C23A', count: 3 },
  { id: 3, name: '生活', color: '#E6A23C', count: 2 }
])
</script>
