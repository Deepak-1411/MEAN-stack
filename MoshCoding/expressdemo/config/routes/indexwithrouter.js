//index.js to use the router and code structure a proper to use
const debug= require('debug')('app:startup');
const config = require('config');
const moegan = require('morgan');
const helmet= require('helmet');
const Joi = require('joi');
const logger = require('./logger');
require('.routes/courses.js')

const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views/index.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses',courses);
