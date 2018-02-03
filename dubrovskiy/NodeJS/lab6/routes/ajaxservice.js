var express = require('express');
var route = express.Router();
route.post('/get',function(req,res,next){
	var obj = JSON.parse(req.body);
	console.log("From: " + obj.from +
		"To: " + obj.to + "Message: " + obj.message);
	res.statusSend(200);
	var dData = [
		{name: 'Peter', data: 'bla-bla'},
		{name: 'Vasya', data: 'ps...'},
	];
	res.send(JSON.stringify(oData));
});

module.exports = route;