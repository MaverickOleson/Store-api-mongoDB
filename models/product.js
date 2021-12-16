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
			values: ['ikea', 'puma', 'adidas', 'yeezy', 'Nike', 'terraria', 'Foot Cuisine', 'Wacky N Tacky', 'All Nature Al', 'Plain Ol Corp.', "Electrono's"],
			message: '{VALUE} is not supported'
		},
		trim: true,
		maxlength: [50, 'Name Cannot Be more than 50 Characters'],
	},
	image: {
		type: String,
		require: [true, "Must Provide Image"]
	}
})

module.exports = mongoose.model('Product', productSchema)