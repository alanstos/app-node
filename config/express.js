var express = require('express');
var app = express();
app.set('view engine','ejs');	
app.set('views','./app/views');

var func_module_app = function(){

	console.log("modulo ta sendo carregado")
	return app;
}

module.exports = func_module_app;