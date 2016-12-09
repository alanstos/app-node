
var func_rotas_produtos = function(app){

	app.get('/produtos', function(req, res){
		console.log('endpoint de /produtos');
    	res.render('produto/lista');
	});
}

module.exports = func_rotas_produtos;