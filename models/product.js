const mongoose  = require('mongoose');

const myScheme = new mongoose.Schema({
    product_name: { type: String, required: true }, 
    product_type: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    unit: { type: String, required: true },
},{versionKey: false,timestamps: true});

module.exports = mongoose.model('Product',myScheme);
