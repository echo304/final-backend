const mongoose = require('mongoose');

const CATEGORIES = {
    ELECTRONICS: 'electronics',
    CLOTHING: 'clothing',
    FOOD: 'food',
    BOOKS: 'books',
    SPORTS: 'sports'
};

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});

module.exports =
    {
        CATEGORIES,
        Product: mongoose.model('Product', productSchema)
    };
