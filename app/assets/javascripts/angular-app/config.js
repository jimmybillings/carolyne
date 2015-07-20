
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'carolyne-billings-yoga';
	var applicationModuleVendorDependencies = ['ui.router', 'ngResource', 'ngSanitize', 'restangular', 'ui.bootstrap', 'templates'];

	// Add a new vertical module
	var registerModule = function(moduleName) {
		// Create angular module

		angular.module(moduleName, []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);

	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();