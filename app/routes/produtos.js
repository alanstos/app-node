
//var dbConnection = require('../infra/connectionFactory');

var func_rotas_produtos = function(app){

	app.get('/produtos',function(req,res){

		console.log('endpoint de /produtos');

		var connection = app.infra.connectionFactory();

		var produtoDao = new app.infra.produtoDao(connection);

		produtoDao.lista( function(err,results){ 

      		console.log('erro= ' + err);

            res.render('produto/lista',{lista:results});

        });

        connection.end();        
        console.log('connection.end()');

	});

	app.get('/produtos/remove',function(req,res){
		console.log('removendo produtos...');

		var connection = app.infra.connectionFactory();

		var produtoDao = app.infra.produtoDao( connection );

		var produto = produtoDao.carrega(id,function(){

		});

		if (produto){
			produtoDao.remove(produto,function(){

			});
		}

		connection.end();    

	});
}

module.exports = func_rotas_produtos;