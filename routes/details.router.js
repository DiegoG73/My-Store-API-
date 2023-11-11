const express = require('express');

const router = express.Router();

router.get('/:productId', (req, res) => {
  res.json({
    productId,
    name: 'Product 2',
    price: 2500
  })
});


module.exports = router;
