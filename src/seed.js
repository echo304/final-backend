const mongoose = require('mongoose');
const { Product, CATEGORIES } = require('./models/product');
require('dotenv').config();
const connectDB = require('./config/database');

const seedProducts = async () => {
    await connectDB();

    const products = [
        { id: 1, name: 'iPhone 12 Pro', description: 'The latest flagship smartphone from Apple', price: 999.0, category: CATEGORIES.ELECTRONICS, imgUrl: `https://picsum.photos/id/1/800` },
        { id: 2, name: 'Nike Air Max 90', description: 'Classic sneakers with iconic design', price: 129.0, category: CATEGORIES.CLOTHING, imgUrl: `https://picsum.photos/id/7/800` },
        { id: 3, name: 'Pizza Margherita', description: 'Traditional Italian pizza with fresh mozzarella and basil', price: 12.99, category: CATEGORIES.FOOD, imgUrl: `https://picsum.photos/id/19/800` },
        { id: 4, name: 'The Great Gatsby', description: 'A classic novel by F. Scott Fitzgerald', price: 9.99, category: CATEGORIES.BOOKS, imgUrl: `https://picsum.photos/id/23/800` },
        { id: 5, name: 'Nike Mercurial Superfly', description: 'Professional football boots for speed and agility', price: 199.0, category: CATEGORIES.SPORTS, imgUrl: `https://picsum.photos/id/54/800` },
        { id: 6, name: 'Samsung Galaxy S21', description: 'High-end Android smartphone with powerful features', price: 1099.0, category: CATEGORIES.ELECTRONICS, imgUrl: `https://picsum.photos/id/32/800` },
        { id: 7, name: 'Levi\'s 501 Jeans', description: 'Classic denim jeans with a timeless style', price: 79.0, category: CATEGORIES.CLOTHING, imgUrl: `https://picsum.photos/id/45/800` },
        { id: 8, name: 'Chocolate Chip Cookies', description: 'Homemade cookies with gooey chocolate chips', price: 4.99, category: CATEGORIES.FOOD, imgUrl: `https://picsum.photos/id/67/800` },
        { id: 9, name: 'To Kill a Mockingbird', description: 'A Pulitzer Prize-winning novel by Harper Lee', price: 14.99, category: CATEGORIES.BOOKS, imgUrl: `https://picsum.photos/id/89/800` },
        { id: 10, name: 'Adidas Ultraboost', description: 'Comfortable running shoes with responsive cushioning', price: 179.0, category: CATEGORIES.SPORTS, imgUrl: `https://picsum.photos/id/101/800` },
        { id: 11, name: 'MacBook Pro', description: 'Powerful laptop for professional use', price: 1999.0, category: CATEGORIES.ELECTRONICS, imgUrl: `https://picsum.photos/id/123/800` },
        { id: 12, name: 'Converse Chuck Taylor', description: 'Classic canvas sneakers for everyday wear', price: 59.0, category: CATEGORIES.CLOTHING, imgUrl: `https://picsum.photos/id/234/800` },
        { id: 13, name: 'Sushi Platter', description: 'Assorted sushi rolls with fresh ingredients', price: 39.99, category: CATEGORIES.FOOD, imgUrl: `https://picsum.photos/id/345/800` },
        { id: 14, name: 'The Lord of the Rings', description: 'Epic fantasy trilogy by J.R.R. Tolkien', price: 29.99, category: CATEGORIES.BOOKS, imgUrl: `https://picsum.photos/id/456/800` },
        { id: 15, name: 'Nike Air Jordan', description: 'Iconic basketball shoes with stylish design', price: 149.0, category: CATEGORIES.SPORTS, imgUrl: `https://picsum.photos/id/567/800` },
        { id: 16, name: 'Dell XPS 13', description: 'Slim and lightweight laptop for productivity', price: 1299.0, category: CATEGORIES.ELECTRONICS, imgUrl: `https://picsum.photos/id/678/800` },
        { id: 17, name: 'Ralph Lauren Polo Shirt', description: 'Classic polo shirt with embroidered logo', price: 89.0, category: CATEGORIES.CLOTHING, imgUrl: `https://picsum.photos/id/789/800` },
        { id: 18, name: 'Ice Cream Sundae', description: 'Delicious dessert with various toppings', price: 6.99, category: CATEGORIES.FOOD, imgUrl: `https://picsum.photos/id/890/800` },
        { id: 19, name: 'Harry Potter and the Sorcerer\'s Stone', description: 'First book in the Harry Potter series', price: 19.99, category: CATEGORIES.BOOKS, imgUrl: `https://picsum.photos/id/901/800` },
        { id: 20, name: 'New Balance Fresh Foam', description: 'Running shoes with plush cushioning', price: 129.0, category: CATEGORIES.SPORTS, imgUrl: `https://picsum.photos/id/31/800` }
    ];

    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Database seeded!');
    } catch (error) {
        console.error('Error seeding database', error);
    } finally {
        mongoose.connection.close();
    }
};

seedProducts();
