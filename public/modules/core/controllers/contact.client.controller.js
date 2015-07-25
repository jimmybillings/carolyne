
angular.module('core').controller('ContactController', ['$scope', 'ValidationService', 'Contact',
	function($scope, ValidationService, Contact) {

		Contact.fields.then(function(response) {
			$scope.fields = response.fields;
			console.log($scope.fields);
		})
		
		$scope.sendMail = {};

		$scope.send = function() {
			Contact.save($scope.sendMail).then(function(response){
				$scope.emailSent = response.success;
			}, function(errors){
				console.log(errors);
        		$scope.fields = ValidationService.validate($scope.fields, errors.data.messages);  
			});
		};
	}
]);