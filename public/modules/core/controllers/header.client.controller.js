
angular.module('core').controller('HeaderController', ['$scope', 'Menus',
	function($scope, Menus) {
		
		$scope.init = function() {
			$scope.isCollapsed = false;
			
			// Creating the Top Bar Menu
			Menus.addMenu('topbar');
			Menus.addMenuItem('topbar', 'Practice', 'practice', 'practice', 'practice', 'practice');
			Menus.addMenuItem('topbar', 'Offerings', 'offerings', 'offerings', 'offerings', 'offerings');
			Menus.addMenuItem('topbar', 'About', 'about', 'about', 'about', 'about');
			Menus.addMenuItem('topbar', 'Contact', 'contact', 'contact', 'contact', 'contact');
			
			// Get the Top Bar Menu 
			$scope.menu = Menus.getMenu('topbar');
		};
		

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);

