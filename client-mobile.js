var http = require('http');

var configuracao  = {
   	hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        'Accept':'application/json' //formato json
        //'Accept':'text/html'      //formato html
    }
}

http.get(configuracao,function(res){
	console.log(res.statusCode);

    res.on('data',function(body){

        console.log(body);

        console.log('');
        console.log('');

        console.log('Corpo:'+body);
    });	

});

