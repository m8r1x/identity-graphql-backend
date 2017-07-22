var { 
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

var UserType = new GraphQLObjectType({
	name: 'ApiUser',
	description: 'Object descibing user information for an api user.',
	fields: () => ({
		email: {
			type: GraphQLString
		}
	})
});

var UserInputType = new GraphQLInputObjectType({
	name: 'ApiUserInput',
	description: 'Object descibing user input for an api user.',
	fields: () => ({
		email: {
			type: new GraphQLNonNull(GraphQLString)
		},
		password: {
			type: new GraphQLNonNull(GraphQLString)
		}
	})
});

module.exports = {
	UserType,
	UserInputType
};