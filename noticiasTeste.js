console.log("Criando um site de noticias com NodeJS");

var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == "/futebol"){
		res.end("<html><body>futebol!!!</body></html>");
	}else if(categoria == "/moda"){
		res.end("<html><body>Moda!!!</body></html>");
	}else if(categoria == "/cinema"){
		res.end("<html><body>cinema!!!</body></html>");
	}else{
		res.end("<html><body>outro!!!</body></html>");
	}

	
});

server.listen(3000);