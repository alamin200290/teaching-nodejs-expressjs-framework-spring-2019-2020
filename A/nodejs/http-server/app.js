var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
	//console.log('request processed!');

/*	res.writeHead(200, {'content-type': 'text/plain'});
	res.write('<h1>welcome to node server!</h1>');
	res.end();*/

	if(req.url == '/home'){
		//var data = fs.readFileSync('home.html');
		//res.write(data.toString());
		//res.end();
		fs.createReadStream('home.html').pipe(res);
	}else if(req.url == '/login'){
		/*res.write('Login page');
		res.end();*/

		var data = fs.readFileSync('login.html');
		res.write(data.toString());
		res.end();

	}else{
		res.write('invalid request! try with a valid url!');
		res.end();
	}


});

server.listen(3000);
console.log('server started at 3000!');
