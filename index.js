//import express and body-parser and other related imports

const express = require('express');
const bodyParser = require('body-parser');
const {
     listBooksController,
     createBookController,
     updateBookController,
     deleteBookController,
} = require('./controllers');

//create an express server instance
const server = express();

//Middlewear
server.use(bodyParser.json());

//routes
//list books
server.get('/book', listBooksController);

//create book
server.post('/book', createBookController);

//update book
server.put('/book', updateBookController);

server.delete('/book', deleteBookController);

//start the server
server.listen(3000, () => console.log('server is ready'));
