
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

	app.post('/api/autores/remove',function(req, res){

		console.log('removendo autor....');		

		var index = autores.indexOf(req.body);

		console.log(index);

		if (index > -1) {
    		autores.splice(index, 1);
		}

		res.status(200).jsonp(autores);

	});

	app.post('/api/autores/grava',function(req, res){

		console.log('chegou no server com post');

		var validatorNome = req.assert('nome','nome é obrigatório').notEmpty();
		var validatorEmail = req.assert('email','email é obrigatório').notEmpty();
		var validatorSenha = req.assert('senha','senha eh obrigatorio').notEmpty();

		var erros = req.validationErrors();

		if (erros){
			console.log('erro  true');
			console.log(erros);
		
			res.status(400).jsonp(erros);

			return;
		}		

		console.log('sucesso');

		autores.push(req.body);

		console.log(autores);
		res.status(200).jsonp(autores);
	});	

}


module.exports = func_rotas_autores;