var express = require('express');
var app = express();
var route = require('./user.js');
app.use('/',route);
app.listen(3000);