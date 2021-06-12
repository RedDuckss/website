const express = require('express');
const handlebars = require('express-handlebars');
const serverless = require('serverless-http');

const app = express();

app.get('/', (request, response) => {
	response.render('home');
});

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

module.exports.handler = serverless(app);