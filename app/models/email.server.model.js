'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/**
 * Email Schema
 */
var EmailSchema = new Schema({
	// Email model fields   
	// ...
	email: {
		type: String,
		trim: true,
		default: '',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	}
});

mongoose.model('Email', EmailSchema);