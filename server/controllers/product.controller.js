const Product = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({'message': 'hello world'})
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err))
}