
angular.module('core').factory('Contact', ['$resource',
	function($resource) {
		// Contact service logic
		// ...

		// Public API
		return $resource('contact/form').get().$promise;
	}
]);