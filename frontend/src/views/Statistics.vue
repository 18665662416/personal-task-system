<template>
  <div>
    <h2>数据统计</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-statistic title="总任务" :value="10" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="已完成" :value="5" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="进行中" :value="5" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="完成率" :value="50" suffix="%" />
      </el-col>
    </el-row>
  </div>
</template>
