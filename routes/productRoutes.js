const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', async (req, res) => {
    const products = await productController.getAllProducts();
    res.render('index', { products });
});

router.get('/new', (req, res) => {
    res.render('product', { product: null });
});

router.get('/:id/edit', async (req, res) => {
    const product = await productController.getProductById(req, res);
    res.render('product', { product });
});

router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);

module.exports = router;