const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', async (req, res) => {
    const products = productController.getAllProducts();
    res.render('index', { products });
});

router.get('/:id', productController.getProductById);

module.exports = router;