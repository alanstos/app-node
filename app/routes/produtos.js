
//var dbConnection = require('../infra/connectionFactory');

var func_rotas_produtos = function(app){

	app.get('/produtos',function(req,res){

		console.log('endpoint de /produtos');

		var connection = app.infra.connectionFactory();

		var produtoDao = new app.infra.produtoDao(connection);

		produtoDao.lista( function(err,results){ 

			console.log('erro= ' + err);

			//rest - Content Negociation
			res.format({
				html : function(){
					res.render('produto/lista',{lista:results});
				},
				json : function(){
					res.json(results);
				}
			});

        });

        connection.end();        
        console.log('connection.end()');

	});

	app.get('/produtos/form',function(req,res){
		res.render('produto/form');
	});

	app.post('/produtos/salva',function(req,res){

		console.log('endpoint de /salva produtos');

		var produto = req.body;

		console.log(produto);

		var connection = app.infra.connectionFactory();

		var produtoDao = new app.infra.produtoDao(connection);

		produtoDao.salva( produto, function(err, results){

			console.log(err);

			if (!err){
				console.log('dados salvo com sucesso');
			}

			res.redirect('/produtos');
		});

		
	});	

	app.get('/produtos/remove',function(req,res){
		console.log('removendo produtos...');

		var connection = app.infra.connectionFactory();

		var produtoDao = new app.infra.produtoDao( connection );

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