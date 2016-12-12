
function produtoDao(connection){

	console.log("lista em produto dao");

	this._connection = connection;

	//console.log(this);

	return this;

}

produtoDao.prototype.lista = function(callback){
	this._connection.query('select * from livro',callback);
}


produtoDao.prototype.remove = function( produto,callback){
	this._connection.query('delete from livro where id = ' + produto.id, callback);
}

produtoDao.prototype.carrega = function( id,callback){
	this._connection.query('select * from livro where id = ' + id, callback);
}	

module.exports = function(){
	console.log("pre produtoDao");
	return produtoDao;
};