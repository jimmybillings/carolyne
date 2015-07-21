'use strict';

var mongoose = require('mongoose'),
	Email = mongoose.model('Email'),
	_ = require('lodash');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.email = function(req, res) {
	Email.update(
		{email: req.body.email}, 
		{$setOnInsert: req.body}, 
		{upsert: true}, 
		function(err, numAffected) {
			res.jsonp(req.body);
		}
	);

};