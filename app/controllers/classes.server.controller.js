'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

/**
 * Create a Class
 */
exports.create = function(req, res) {

};

/**
 * Show the current Class
 */
exports.read = function(req, res) {

};

/**
 * Update a Class
 */
exports.update = function(req, res) {

};

/**
 * Delete an Class
 */
exports.delete = function(req, res) {

};

/**
 * List of Classes
 */
exports.list = function(req, res) {

};