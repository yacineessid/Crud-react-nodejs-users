
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
require('dotenv').config()
var app = express();

const routerUsers=require('./routes/users.route')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected!'))
  .catch(error=>console.log(`error`, error))
  app.use('/',routerUsers)
