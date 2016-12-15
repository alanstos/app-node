
var func_rotas_autores = function(app){

	app.get('/api/autores',function(req, res){

		var autores = [
		      {id:1,nome:'joao barbosa', email:'joao.barbosa@email.com.br',senha:'123456'},
		      {id:2,nome:'marcelo jo', email:'marcelo.jo@email.com.br',senha:'123456'},
		      {id:3,nome:'p jo', email:'marcelo.jo@email.com.br',senha:'123456'}
		      ];

		console.log(autores);
		res.json(autores);
	});

}


module.exports = func_rotas_autores;