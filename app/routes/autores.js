
var func_rotas_autores = function(app){

		var autores = [
		      {id:'1',nome:'joao barbosa', email:'joao.barbosa@email.com.br',senha:'123456'},
		      {id:'2',nome:'marcelo jo', email:'marcelo.jo@email.com.br',senha:'123456'},
		      {id:'3',nome:'p jo', email:'marcelo.jo@email.com.br',senha:'123456'}
		      ];	

	app.get('/api/autores',function(req, res){



		console.log(autores);
		res.status(200).jsonp(autores);
	});

	app.post('/api/autores',function(req, res){

		autores.push(req.body);

		console.log(autores);
		res.status(200).jsonp(autores);
	});	

}


module.exports = func_rotas_autores;