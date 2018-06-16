



var MySQL = function(){
	var mysql = require('mysql');

	return mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: '',
				database: 'portal_noticias'
			});
}

module.exports = function(){
	return MySQL;
}