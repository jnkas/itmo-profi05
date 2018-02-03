'use strict'
let  fs = require("fs");
fs.readFile('index.html', afterReadFile);
function afterReadFile(err, data) {
	if (err) return console.error(err); 	 
		console.log(data.toString());
};
console.log("Program Ended");