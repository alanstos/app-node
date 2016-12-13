var http = require('http');

var configuracao  = {
   	hostname: 'localhost',
    port:3000,
    path: '/produtos/salva',
    method: 'post',
    headers: {
        'Accept':'application/json', //recebendo
        'Content-type':'application/json' // enviando
    }
}

//preparando request
var client = http.request(configuracao,function(res){

	console.log(res.statusCode);

    res.on('data',function(body){
    	
        console.log(body);

        console.log('');
        console.log('');

        console.log('Corpo:'+body);
    });	

});

var produto = {
    titulo : 'mais sobre backend 2',
    descricao: 'mais sobre backend parte 2',
    preco: '125'
}

var produtoStr = JSON.stringify(produto);                   

//envia o resquest
client.end(  produtoStr );

