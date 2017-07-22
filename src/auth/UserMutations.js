var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var { GraphQLNonNull, GraphQLString } = require('graphql');

var User = require('./UserModel');
var { UserType, UserInputType } = require('./UserSchema');

var login = {
	type: new GraphQLNonNull(GraphQLString),
	description: 'Log in to receive an access token.',
	args: {
		data: {
			name: 'Data',
			type: new GraphQLNonNull(UserInputType)
		}
	},
	resolve: (root, params, { SECRET }) => {
		return new Promise(resolve => {
			User.findOne({email: params.data.email}).exec().then(user => {
				bcrypt.compare(params.data.password, user.password, (err, authorized) => {
					if (!authorized) throw new Error('Invalid password');
					var token = jwt.sign({
						user: _.pick(user, ['_id', 'name'])
					}, SECRET, {expiresIn: '1y'});
					resolve(token);
				});
			});
		}).then(token => token);
	}
};

var register = {
	type: UserType,
	description: 'Registration for new api users.',
	args: {
		data: {
			name: 'Data',
			type: new GraphQLNonNull(UserInputType)
		}
	},
	resolve: (root, params) => {
		return new Promise(resolve => {
			bcrypt.hash(params.data.password, 12, (err, hash) => {
				params.data.password = hash;
				var new_user = new User(params.data);
				new_user.save();
				resolve(new_user);
			});
		}).then(user => user);
	}
};

module.exports = {
	login,
	register
};