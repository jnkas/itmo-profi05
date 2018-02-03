var express = require('express');
var mustacheExpress
	= require('mustache-express');

var app = express();
var indexRoute = require('./routes/index.js');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/',indexRoute);

app.listen(8080);