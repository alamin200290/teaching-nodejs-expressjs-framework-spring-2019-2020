/*var fs = require('fs');
//fs.writeFileSync('data.txt', 'sdhfsdhf sfs f');
var data = fs.readFileSync('data.txt');
console.log(data.toString());
*/

/*var path = require('path');

var root = "C:/windows/program_files/vss/shsg\sd\dd\\\dd//df/abc.js";

console.log(path.dirname(root));
console.log(path.extname(root));
console.log(path.normalize(root));
*/


var http = require('http');

var requestHandler = function(request, response){

	console.log(request.url);
	console.log(request.method);
	response.write('welcome to node server');
	response.end();

}

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at 3000');

