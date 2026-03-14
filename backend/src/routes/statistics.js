const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    code: 200,
    data: {
      total: 10,
      completed: 5,
      pending: 5,
      completionRate: 50
    }
  });
});

module.exports = router;
