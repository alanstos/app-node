var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var func_module_app = function(){

	console.log("modulo ta sendo carregado");

	var app = express();

	app.set('view engine','ejs');	
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(expressValidator());

	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});	



	load('routes',{cwd: 'app'})
	 		.then('infra')
			.into(app);

	return app;
}

module.exports = func_module_app;