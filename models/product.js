const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Must Provide Name"],
		trim: true,
		maxlength: [50, 'Name Cannot Be more than 50 Characters'],
	},
	price: {
		type: Number,
		required: [true, "Must Provide Price"],
	},
	featured: {
		type: Boolean,
		required: [true, "Must Provide Feature"],
		default: false
	},
	rating: {
		type: Number,
		required: [true, "Must Provide Rating"],
	},
	createdAt: {
		type: Date,
		required: [true, "Must Provide Created At"],
	},
	company: {
		type: String,
		required: [true, "Must Provide Company"],
		enum: {
			values: ['ikea', 'puma', 'adidas', 'yeezy', 'nike', 'terraria'],
			message: '{VALUE} is not supported'
		},
		trim: true,
		maxlength: [50, 'Name Cannot Be more than 50 Characters'],
	},
})

module.exports = mongoose.model('Product', productSchema)