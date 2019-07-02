const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
    text: String,
    complete: Boolean
})

const ToDo = mongoose.model("todo", ToDoSchema)

module.exports = ToDo