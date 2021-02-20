var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
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

module.exports = app;
