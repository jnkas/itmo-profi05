'use strict'
let fs = require("fs");
let data = fs.readFileSync('index.html');
console.log(data.toString());
console.log("Program Ended");