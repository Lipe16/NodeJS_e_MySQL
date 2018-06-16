module.exports = function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){
		//res.send("<html><body>Portal de noticias</body></html>");
		res.render('admin/form_add_noticia');//metodo render vem do EJS
	});


	app.post('/noticias/salvar', function(req, res){

			var connection = app.config.dbConnection();
			var noticiaModel = app.app.models.noticiasModel;

			noticiaModel.salvarNoticia(req.body ,connection, (error, result) => {
				res.redirect('/noticias');
			});
	});

}