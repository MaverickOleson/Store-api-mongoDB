const Product = require('../models/product')

const getAllTasks = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res) => {
    //const task = await Task.create({name: "watch digimon"})
    // res.send('Create Task')
    // const task = await Task.create(req.body)
    // res.json(task)
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    // res.send('Get Task')
    // res.json({id:req.params})
    try {
        const product = await Product.findById(req.params.id)
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const updateTask = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTask = async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id })
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }