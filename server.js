// Node Modules Imports
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

// Internal Modules Imports
const api = require('./server/routes/api')

// Connecting to Mongo Database
// mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true })

// Setting up express, serving client files, configuring bodyParser
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Connecting to "api", i.e our routes
app.use('/', api)

// Running the server
const port = 3001
app.listen(port, function () { console.log('Running on ' + port) })