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
 * Create a Corporate private
 */
exports.create = function(req, res) {

};

/**
 * Show the current Corporate private
 */
exports.read = function(req, res) {

};

/**
 * Update a Corporate private
 */
exports.update = function(req, res) {

};

/**
 * Delete an Corporate private
 */
exports.delete = function(req, res) {

};

/**
 * List of Corporate privates
 */
exports.list = function(req, res) {

};