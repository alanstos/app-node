
var classLivro = function(connection){

	console.log("lista em produto dao");

	this.lista = function(callback){
		connection.query('select * from livro',callback);
	}

	this.remove = function( produto,callback){
		connection.query('delete from livro where id = ' + produto.id, callback);
	}

	this.carrega = function( id,callback){
		connection.query('select * from livro where id = ' + id, callback);
	}	

	console.log(this);

	return this;

}

module.exports = function(){
	console.log("pre produtoDao");
	return classLivro;
};