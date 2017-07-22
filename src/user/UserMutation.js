var {
	GraphQLID,
	GraphQLNonNull,
	GraphQLString
} = require('graphql');

var User = require('./UserModel');
var { UserType, UserInput } = require('./UserSchema');

var createUser = {
	type: UserType,
	description: 'Create/register a new user in the database',
	args: {
		data: {
			name: 'Data',
			type: new GraphQLNonNull(UserInput)
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not logged in');
		var new_user = new User(params.data);
		new_user.save();
		return new_user;
	}
};

var deleteUser = {
	type: GraphQLString,
	description: 'Delete/remove an existing user from the database',
	args: {
		id: {
			name: 'Data',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not logged in');
		return User.remove({ _id: params.id}).exec();
	}
};

var updateUser = {
	type: UserType,
	description: 'Update an existing user\'s information in the database',
	args: {
		data: {
			name: 'Data',
			type: new GraphQLNonNull(UserInput)
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not logged in');
		User.findOneAndUpdate({ _id: params.data.id }, { new: true }).exec();
		return User.findOne({ _id: params.data.id }).exec();
	}
};

module.exports = {
	createUser,
	deleteUser,
	updateUser
};