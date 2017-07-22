var User = require('./UserQuery');
var { login, register } = require('./UserMutations');

module.exports = {
	User,
	login,
	register
};