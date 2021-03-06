const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}