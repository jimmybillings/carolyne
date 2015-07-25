
angular.module('core').factory('Contact', ['$resource',
	function($resource) {

		// Public API
		return {
			fields: $resource('contact/form').get().$promise, 
			save: function(params) {
				return $resource('contact').save(params).$promise;
			}

		}
	}
]);