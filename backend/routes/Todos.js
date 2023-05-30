const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');



// Get all Todo Routes 


router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})


// create new todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        // req.body // what the Vue app is sending 
        {
            author: "Flanders",
            todo: "Go to cananda"
        }
    )
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

// Getter By Id
router.get('/get/:id', async (req, res) => {
    const t = await Todo.findById({
        _id: req.params.id
    })
    res.json(t)
})

// Delete a todo By Id
router.delete('/delete/:id', async (req, res) => {
    const tDelete = await Todo.findByIdAndDelete({
        _id: req.params.id
    })
    res.json(tDelete)
})


// Delete a todo By Id
router.put('/update/:id', async (req, res) => {
    const tupdate = await Todo.updateOne(
        // { _id: req.params.id}, { $set: req.body}
        {
            author: "Bart",
            todo: "Go to Skating"
        }
    )
    res.json(tupdate)
})

module.exports = router 