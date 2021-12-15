const connectDB = require('./connect');
const Product = require('../models/product');
const jsonProducts = require('../data.json');

const populate = async () => {
	await connectDB(process.env.MONGO_URI)
	await Product.deleteMany()
	await Product.create(jsonProducts.shoes)
	console.log('Success!!!!')
	// process.exit(0)
}

module.exports = populate;