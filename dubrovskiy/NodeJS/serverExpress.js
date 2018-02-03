let testExpress = require('./testExpress');

let app = new testExpress(process.stdin,process.stdout);

app.use(function(req, res, next){
	req.data = req.data.toUpperCase();
	next();
});

app.use(function(req, res, next){
	let fsStream = fs.createWriteStream('log.txt');
	fsStream.write(req.data);
	fsStream.on('drain', function(){
		fsStream.end();
		console.log('cb drain');
		next();
	}).on('error',function){
		console.log(err);
		res.send('Error');
	});
});
