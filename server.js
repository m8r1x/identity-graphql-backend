/* eslint-env node */
/* eslint no-console: 0*/

require('dotenv').config();

var Express = require('express');
var mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
var jwt = require('express-jwt');

var Schema = require('./src/schema');
var app = Express();
var PORT = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/identitydb', { useMongoClient: true});

app.use(jwt({
	secret: process.env.SECRET,
	credentialsRequired: false,
	getToken: req => {
		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			return req.headers.authorization.split(' ')[1];
		} else if (req.query && req.query.token) {
			return req.query.token;
		}
		return null;
	}
}));

app.use('/', graphqlHTTP(req => ({
	schema: Schema,
	graphiql: true,
	context: { SECRET: process.env.SECRET, user: req.user }
})));

app.listen(PORT);
console.log('Server listening on', PORT);
