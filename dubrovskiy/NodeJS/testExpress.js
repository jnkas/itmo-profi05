module.exports = class dispatcherMiddleware {
	constructor(readStream, whriteStream) {
		this.readStream = readStream;
		this.whriteStream =whriteStream;
		this.fifoMiddleWare = [];
		readStream.on('data', function(chunk)) {
			this.run({this.fifoMiddleware
				data:chunk
			},
			{
				send:function(data){
					this.whriteStream.write(data.data);
				}
			},
			function(data){
				this.whriteStream.write(data.data);
			});

		}
	}
	use(middleware) {
		this.fifoMiddleware.push(middleware);
	}
	run(arrFunc,arg,oSend,callback){
		function iterator(index) {
			if(index === arrFunc.length) {
				return callback(arg);
			}
			arrFunc[index](arg,oSend,function(err))
		}
	}
}