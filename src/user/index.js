var { _User, Users } = require('./UserQuery');
var { createUser, deleteUser, updateUser } = require('./UserMutation');

module.exports = {
	_User,
	Users,
	createUser,
	deleteUser,
	updateUser
};