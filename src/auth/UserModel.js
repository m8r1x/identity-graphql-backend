var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApiUserModel = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
}, { collection: 'user', timestamps: true });

module.exports = mongoose.model('ApiUser', ApiUserModel);