
angular.module('core').controller('AboutController', ['$scope', 'Restangular',
	function($scope, Restangular) {
		
		Restangular.setBaseUrl("/api");
		Restangular.all('about.json').getList().then(function(blocks){
			blocks.filter(function(block){
				if (block.usecase == 'about_text') {
					$scope.aboutText = block.content;
				}
			});
		});
	}
]);