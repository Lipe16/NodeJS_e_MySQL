var app = require('./config/server');


//rotas
/* //ROTAS MANUAIS, comentei porque comecei a usar consign que adiciona requires automaticamente
var routeHome = require('./app/routes/home');
routeHome(app);// pode chamar uma função assim ou da maneira que está logo abaixo, mais direta

var routeFormularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

uteNoticias = require('./app/routes/noticias')(app);
*/ 


//iniciando servidor na porta 3000
app.listen(3000, function(){
	console.log('Servidor em operação, sucesso!');
});