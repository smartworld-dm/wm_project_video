/* eslint-disable no-console */
const path = require('path')
const http = require('http')

const express = require('express')
const app = express()

var port = process.env.PORT || 8080;

// serve the html/index.html
app.use(express.static(path.resolve(__dirname, 'html')))
// serve the player
// app.use(express.static(path.resolve(__dirname, '../lib')))
app.use(express.static(path.resolve(__dirname, '../lib_new')))

const server = http.createServer(app)

server.listen(3000)
console.log('Server is running on 3000')
