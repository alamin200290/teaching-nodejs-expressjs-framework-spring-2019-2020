/*var fs = require('fs');
fs.writeFileSync('data.txt', 'hsdvfhsd sdfhsdgfs');
var data = fs.readFileSync('data.txt');
console.log(data.toString());*/

/*var path = require('path');
var bc = "C://windows/prog/ram_file//asdasd//sad\as\\asdasd/app.js";

console.log(path.dirname(bc));
console.log(path.extname(bc));
console.log(path.normalize(bc));*/

var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){

	//console.log(request.url);
	//console.log(request.method);
	/*response.writeHead(200, {'content-type': 'text/plain'});
	response.write('<h1>welcome to node http server!</h1>');
	response.end();*/

	if(request.url == "/home"){
		response.write('welcome home!');
		response.end();
	}else if(request.url == '/login'){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('login.html');
		response.write(data.toString());
		response.end();

	}else{
		response.write('Opps! Invalid request!');
		response.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at port 3000');






