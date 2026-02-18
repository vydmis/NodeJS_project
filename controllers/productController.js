const products = require('../data/products');

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send('Produktas nerastas');
        return null; // Grąžiname `null`, jei produktas nerastas
    }
    return product; // Grąžiname produktą
};

const updateProductById = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Produktas nerastas');

    const updatedProduct = { ...products[productIndex], ...req.body };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
};

const deleteProductById = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Produktas nerastas');

    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct[0]);
};

const createProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
};

module.exports = {
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    createProduct
};
