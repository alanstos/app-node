
var func_rotas_autores = function(app){

	app.get('/autores',function(req, res){

		var autores = [
		      {nome:'joao barbosa', email:'joao.barbosa@email.com.br',senha:'123456'},
		      {nome:'marcelo jo', email:'marcelo.jo@email.com.br',senha:'123456'}
		      ];

		console.log(autores);
		res.json(autores);
	});

}


module.exports = func_rotas_autores;