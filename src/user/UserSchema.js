var { 
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString
} = require('graphql');

var { SocialType, SocialInput } = require('../social');

var UserType = new GraphQLObjectType({
	name: 'User',
	description: 'Object describing user information.',
	fields: () => ({
		name: {
			type: GraphQLString
		},
		career: {
			type: GraphQLString
		},
		social: {
			type: SocialType
		}
	})
});

var UserInput = new GraphQLInputObjectType({
	name: 'UserInput',
	description: 'Object describing user input information.',
	fields: () => ({
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		career: {
			type: new GraphQLNonNull(GraphQLString)
		},
		social: {
			type: SocialInput
		}
	})
});

module.exports = {
	UserType,
	UserInput
};