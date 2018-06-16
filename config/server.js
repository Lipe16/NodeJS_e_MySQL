var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');// para podermos usar a função render no app
app.set('views', './app/views');

//adicionar bodyParser como midleware
app.use(bodyParser.urlencoded({extended:true}));//vai ajudar a cuidar das requisições dando auxilio a ler o body da chamada

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);//o consign adiciona vários requires ao arquivo escolhido de forma automática

module.exports = app;