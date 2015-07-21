'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

/**
 * Create a Doterra
 */
exports.create = function(req, res) {

};

/**
 * Show the current Doterra
 */
exports.read = function(req, res) {

};

/**
 * Update a Doterra
 */
exports.update = function(req, res) {

};

/**
 * Delete an Doterra
 */
exports.delete = function(req, res) {

};

/**
 * List of Doterras
 */
exports.list = function(req, res) {

};