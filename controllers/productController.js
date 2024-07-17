const Product = require('../models/product'); // เรียกใช้โมเดล Product
// getProducts -- get All Products
exports.getProducts = async (req, res) => { 
    try { 
        const products = await Product.find(); 
        res.json(products); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
};

// getProduct -- get Specific Product By Id
exports.getProduct = async (req, res) => {
    try { 
        const { id } = req.param;
        const product = await Product.findById( id );
        if (!product) return res.status(404).json({ message: 'Product not found' }); 
        res.json(product); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
};

// createProduct -- create New Product
exports.createProduct = async (req, res) => {
    const { product_name, product_type, price, unit } = req.body;
    const product = new Product({  product_name, product_type, price, unit });
    try { 
        const newProduct = await product.save();
        res.status(201).json(newProduct); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// updateProduct -- update Product by specific Id
exports.getProduct = async (req, res) => {
    try {
        const { id } = req.param.id;
        const product = await Product.findById( id );
        if (!product) return res.status(404).json({ message: 'Product not found' });
        const data = { $set: {req,body} };
        await Product.findByIdAndUpdate(id, data );
        res.status(201).send('Updated'); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// deleteProduct -- delete Product by specific Id
exports.getProduct = async (req, res) => {
    try {
        const { id } = req.param.id;
        const product = await Product.findById( id );
        if (!product) return res.status(404).json({ message: 'Product not found' });
        await Product.findByIdAndDelete( id );
        res.status(201).send('Deleted'); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};