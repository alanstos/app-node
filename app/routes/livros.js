
var func_rotas_livros = function(app){

		var livros = [
		      {id:'1',titulo:'livro de receita de bolo', preco:'1',autor:'joao barbosa', autorId: '1'},
		      {id:'2',titulo:'livro de SO', preco:'1',autor:'marcelo jo', autorId: '2'},
		      {id:'3',titulo:'livro de Android', preco:'1',autor:'paulo', autorId: '3'},
		      ];	

	app.get('/api/livros',function(req, res){
		console.log(livros);
		res.status(200).jsonp(livros);
	});


	app.post('/api/livros/grava',function(req, res){

		console.log('chegou no server com post');

		var validatorNome = req.assert('titulo','titulo é obrigatório').notEmpty();
		var validatorPreco = req.assert('preco','preco é obrigatório').notEmpty();
		var validatorAutor = req.assert('autor','autor eh obrigatorio').notEmpty();

		var erros = req.validationErrors();

		if (erros){
			console.log('erro  true');
			console.log(erros);
		
			res.status(400).jsonp(erros);

			return;
		}		

		console.log('sucesso');

		livros.push(req.body);

		console.log(livros);
		res.status(200).jsonp(livros);
	});	

}


module.exports = func_rotas_livros;