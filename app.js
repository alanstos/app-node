var app = require('./config/express')();
//var rotasProdutos = require('./app/routes/produtos')(app);

var porta = 8000;

app.listen(porta, function(){
    console.log("Servidor rodando na porta " + porta);
});