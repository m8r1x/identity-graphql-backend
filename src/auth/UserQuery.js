var { GraphQLString, GraphQLNonNull } = require('graphql');

var User = require('./UserModel');
var { UserType } = require('./UserSchema');

module.exports = {
	type: UserType,
	description: 'Fetch a particular api user by email.',
	args: {
		email: {
			name: 'Email',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	resolve: (root, params, { user }) => {
		if (!user) throw new Error('Not logged in');
		return User.findOne({email: params.email}).exec();
	}
};