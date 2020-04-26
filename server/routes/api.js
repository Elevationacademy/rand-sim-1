const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID

    todos.find(t => t.id == todoID).completed = true
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    todos.splice(todoID, 1)
    console.log('hello')
    res.send(todos)
})

module.exports = router