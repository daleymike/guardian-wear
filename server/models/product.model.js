const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "Must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least 1"]
    },
    sku: {
        type: String,
        required: [true, "Sku is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    colors: {
        type: String,
        enum: ['Black', 'Navy', 'Royal']
    },
    sizes: {
        type: String,
        enum: ['Small', 'Medium', 'Large', "X-Large", "XX-Large", '3X-Large']
    },
    quantity: {
        type: Object,
        required: true
    },
    productImg: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)