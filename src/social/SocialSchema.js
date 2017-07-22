var { 
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

var SocialType = new GraphQLObjectType({
	name: 'Social',
	description: '',
	fields: () => ({
		github: {
			type: GraphQLString
		},
		linkedin: {
			type: GraphQLString
		},
		twitter: {
			type: GraphQLString
		}
	})
});

var SocialInput = new GraphQLInputObjectType({
	name: 'SocialInput',
	description: '',
	fields: () => ({
		github: {
			type: GraphQLString
		},
		linkedin: {
			type: GraphQLString
		},
		twitter: {
			type: GraphQLString
		}
	})
});

module.exports = {
	SocialType,
	SocialInput
};