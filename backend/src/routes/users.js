const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({
    code: 200,
    data: { token: 'mock_token', user: { id: 1, name: '用户' } },
    message: '登录成功'
  });
});

module.exports = router;
