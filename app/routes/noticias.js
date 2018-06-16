module.exports = function(app){

		app.get('/noticias', function(req, res){

			var connection = app.config.dbConnection();

			var callback = function(error, result){
				res.render('noticias/noticias', {noticias : result});
			}

			var noticiasModel = app.app.models.noticiasModel;

			noticiasModel.getNoticias(connection, callback);

		});



}