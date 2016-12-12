var express = require('express');
var load = require('express-load');

var func_module_app = function(){

	console.log("modulo ta sendo carregado");

	var app = express();

	app.set('view engine','ejs');	
	app.set('views','./app/views');

	load('routes',{cwd: 'app'})
	 		.then('infra')
			.into(app);

	return app;
}

module.exports = func_module_app;