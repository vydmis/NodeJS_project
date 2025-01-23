const products = require('../data/products');

const getAllProducts = (req, res) => {
     return products;
};

const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Produktas nerastas');
    res.json(product);
};

module.exports = {
    getAllProducts,
    getProductById
};
