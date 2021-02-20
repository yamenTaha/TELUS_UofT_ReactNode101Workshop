var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

//Main part -- creates an Express application
var app = express();

//Boilerplate code
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Our main Route
app.use('/todos', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
