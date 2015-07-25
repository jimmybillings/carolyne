'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Contact = mongoose.model('Contact'),
    _ = require('lodash');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.form = function(req, res) {
	
	res.send(JSON.stringify({fields: [{ name: 'name', type: 'input', value: 'text', label: 'Name'},
	    { name: 'email', type: 'input', value: 'text', label: 'Email'},
	    { name: 'telephone',type: 'input', value: 'text', label: 'Telephone'},
	    { name: 'subject', type: 'input', value: 'text', label: 'Subject'},
	    { name: 'message', type: 'textarea', value: 'text', label: 'Message'}]}));
}

/**
 * Create a Contact
 */
exports.create = function(req, res) {

	var contact = new Contact(req.body);
    contact.save(function() {
    	res.jsonp({ success: 'Thanks for signing up!'});
    }, function(error){
    	res.status(400).json(error.errors);
    });	
};

/**
 * Show the current Contact
 */
exports.read = function(req, res) {

};

/**
 * Update a Contact
 */
exports.update = function(req, res) {

};

/**
 * Delete an Contact
 */
exports.delete = function(req, res) {

};

/**
 * List of Contacts
 */
exports.list = function(req, res) {

};