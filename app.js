const express = require('express');
const app = express();
const populate = require('./db/populate');
const products = require('./routes/products')
require('dotenv').config();

//middleware

// app.use(EXPRESS.static('public'));
app.use(express.json())
app.use('/store/v1/products', products)
app.use(express.static('public'))
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('<h1 style="text-align: center">Something went wrong!</h1>');
})
app.use((req, res, next) => {
	res.status(404).send(`<h1 style="text-align: center"><span style="color:red">ERROR:</span> PAGE NOT FOUND</h1>`);
})

const port = 5000;

const start = async () => {
	try {
		await populate()
		app.listen(port, console.log(`server is listening on port ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()