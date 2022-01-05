//Express Router Setup
const express = require('express')
const router = express.Router()

//Import Controllers
const { getAllTasks, updateTask, getTask, deleteTask, createTask } = require('../controllers/products.js')

router.get('/', getAllTasks)

//router.route('/').get((req,res)=>{}).post(updateLists)

router.route('/').get(getAllTasks).post(createTask)
module.exports = router;