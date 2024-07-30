const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDB = require('./src/config/database');
const { Product } = require('./src/models/product');

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/products', async (req, res) => {
    try {
        const { name, category } = req.query;
        const filter = {};
        if (name) filter.name = new RegExp(name, 'i');
        if (category) filter.category = category;

        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
