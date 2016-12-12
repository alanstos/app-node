var mysql = require('mysql');

function createDBConnection(){

	console.log("create nova conexao...");

	return mysql.createConnection({
    	host : 'localhost',
    	user : 'root',
    	password : 'root',
    	database : 'teste'
	});	

} 	

module.exports = function(){
	console.log("--- express load me chamando");
	return createDBConnection;
};