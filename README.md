In order to use this api, you will be creating a mongoose schema (new mongoose.Schema, module.exports = mongoose.model('Product', productSchema)). With this schema, you can write functions for all your express requests (get, post, etc.) using mongoose methods on the Schema [
    
    const Product = require('../models/product')

    const getAllTasks = async (req, res) => {
        try {
            const product = await Product.find({})
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

]. You then will set express router requests as your functions [
    
    const express = require('express')
    const router = express.Router()

    //Import Controllers
    const { getAllTasks, deleteTask, createTask } = require('../controllers/products.js')

    router.get('/', getAllTasks)

    //router.route('/').get((req,res)=>{}).post(updateLists)

    router.route('/').get(getAllTasks).post(createTask)
    module.exports = router;

], following, which, you will install the dotenv package, create an env file with the connect link for the store, filled with the proper credentials (mongodb+srv://<username>:<password>@task-manager-practice.zh1bk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority), and connect to mongo db using process.env as your url. Then, after having imported your schema, use Product.deletemany() (to replace the products) and Product.create() with the json file of the products you want as the parameter of the create method. The final step is to use axios to get your products (axios.get('/store/v1/products')) in a js file that's linked in the static webpage that you're serving, filling it in with the information from the products you made in your json.