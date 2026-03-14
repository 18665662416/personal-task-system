const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    code: 200,
    data: [
      { id: 1, name: '工作', color: '#409EFF' },
      { id: 2, name: '学习', color: '#67C23A' },
      { id: 3, name: '生活', color: '#E6A23C' }
    ]
  });
});

module.exports = router;
