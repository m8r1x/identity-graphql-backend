var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	career: {
		type: String
	},
	social: {
		type: Object,
		ref: SocialSchema
	}
}, { collection: 'identities', timestamps: true });

var SocialSchema = new Schema({
	github: {
		type: String,
		lowercase: true
	},
	linkedin: {
		type: String,
		lowercase: true
	},
	twitter: {
		type: String,
		lowercase: true
	}
});

module.exports = mongoose.model('User', UserSchema);
