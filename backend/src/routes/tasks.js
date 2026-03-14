const express = require('express');
const router = express.Router();

// 获取任务列表
router.get('/', (req, res) => {
  res.json({
    code: 200,
    data: [
      { id: 1, title: '示例任务', completed: false, category: '工作' }
    ],
    message: '获取成功'
  });
});

// 创建任务
router.post('/', (req, res) => {
  const { title, category } = req.body;
  res.json({
    code: 200,
    data: { id: Date.now(), title, category, completed: false },
    message: '创建成功'
  });
});

// 更新任务
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    code: 200,
    data: { id, ...req.body },
    message: '更新成功'
  });
});

// 删除任务
router.delete('/:id', (req, res) => {
  res.json({
    code: 200,
    message: '删除成功'
  });
});

module.exports = router;
