
//var dbConnection = require('../infra/connectionFactory');

var func_rotas_produtos = function(app){

	app.get('/produtos',function(req,res){

		console.log('endpoint de /produtos');

		var connnection = app.infra.connectionFactory();

      	connnection.query('select * from livro',function(err,results){

      		console.log(err);

            //res.send(results);
            res.render('produto/lista',{lista:results});

        });

        connnection.end();        

	});
}

module.exports = func_rotas_produtos;