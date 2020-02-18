var mysql      	= require('mysql');

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'node1'
	});

var getConnection = function(){
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	});
	return connection;
}

module.exports ={
	getResult: function(sql, callback){
		/*getConnection(function(connection){
			connection.query(sql, function(error, result){
				callback(result);
			});
			connection.end();
		});*/

		var connection = getConnection();
		connection.query(sql, function(error, result){
				if(!error){
					callback(result[0]);
				}else{
					callback(null);
				}
		});
		connection.end(function(error){
			console.log('connection end!');
		});	
	}
}

