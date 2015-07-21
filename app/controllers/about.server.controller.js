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
 * Create a About
 */
exports.create = function(req, res) {

};

/**
 * Show the current About
 */
exports.read = function(req, res) {

};

/**
 * Update a About
 */
exports.update = function(req, res) {

};

/**
 * Delete an About
 */
exports.delete = function(req, res) {

};

/**
 * List of Abouts
 */
exports.list = function(req, res) {

};