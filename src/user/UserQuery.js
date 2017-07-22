var { 
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID
} = require('graphql');

var User = require('./UserModel');
var { UserType } = require('./UserSchema');

var _User = {
	type: UserType,
	description: 'Fetch a particular user from the database by id.',
	args: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not Logged in');
		return User.findOne({ _id: params.id }).exec();
	}
};

var Users = {
	type: new GraphQLList(UserType),
	description: 'Fetch a limited(optional) list of users from the database.',
	args: {
		limit: {
			type: GraphQLInt
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not Logged in');
		return User.find().limit(params.limit).exec();
	}
};

module.exports = {
	_User,
	Users
};