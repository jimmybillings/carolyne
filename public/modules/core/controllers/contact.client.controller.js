
angular.module('core').controller('ContactController', ['$scope', 'ValidationService', 'Contact',
	function($scope, ValidationService, Contact) {

		Contact.then(function(response) {
			$scope.fields = response.fields;
			console.log($scope.fields);

		})
		// Controller Logic
		// ...
		// Restangular.setBaseUrl("/api");
		// Restangular.all('contact.json').customGET().then(function(response){
		// 	$scope.fields = response.contact
		// });
		// $scope.sendMail = {};

		// $scope.send = function() {
		// 	Restangular.service('contact.json').post($scope.sendMail).then(function(response){
		// 		$scope.emailSent = response.success;
		// 	}, function(errors){
  //       		$scope.fields = ValidationService.validate($scope.fields, errors.data.messages);  
		// 	});
		// };
	}
]);