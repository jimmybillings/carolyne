'use strict';

module.exports = function(app) {
	// Root routing
	var routes = {};
	routes.core = require('../../app/controllers/core');
	routes.classes = require('../../app/controllers/classes');
	routes.about = require('../../app/controllers/about');
	routes.doterra = require('../../app/controllers/doterra');
	routes.contact = require('../../app/controllers/contact');
	routes.corporate = require('../../app/controllers/corporate-private');
	
	app.route('/').get(routes.core.index);
	app.route('/classes').get(routes.classes.index);
	app.route('/about').get(routes.about.index);
	app.route('/doterra').get(routes.doterra.index);
	app.route('/contact').get(routes.contact.index);
	app.route('/contact/form').get(routes.contact.form);
	app.route('/corporate-private').get(routes.corporate.index);
	app.route('/email').post(routes.core.email);
	app.route('/contact').post(routes.contact.create);
};