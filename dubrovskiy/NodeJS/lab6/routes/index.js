var express = require('express');
var route = express.Router();
route.get('/',function(req,res,next){
	res.render('index',{title:'lab 6_1'});
});

module.exports = route;