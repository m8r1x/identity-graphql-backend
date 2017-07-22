var { GraphQLSchema, GraphQLObjectType } = require('graphql');

var { 
	Users, 
	_User, 
	createUser, 
	updateUser, 
	deleteUser 
} = require('./user');

var { User, login, register } = require('./auth');

var Schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'userQuery',
		description: 'Queries on the identity graphql api',
		fields: () => ({ 
			user: _User,
			users: Users,
			apiUser: User
		})
	}),
	mutation: new GraphQLObjectType({
		name: 'userMutation',
		description: 'Mutations on the identity graphql api',
		fields: () => ({
			createUser: createUser,
			updateUser: updateUser,
			deleteUser: deleteUser,
			login: login,
			register: register
		})
	})
});

module.exports = Schema;