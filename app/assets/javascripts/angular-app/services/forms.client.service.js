
angular.module('core').factory('Forms', ['$resource',
	function($resource) {
		return $resource('/email', {}, {});



		// // Public API
		// return {
		// 	newsLetterSignUp: function(email) {
		// 		api.email.save({'email':email}).$promise.then(function(response) {

		// 		});
				
		// 	}
		// };
	}
]);