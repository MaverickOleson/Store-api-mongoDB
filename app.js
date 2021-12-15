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

//routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App')
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