'use strict';

angular.module('core').controller('ClassesController', ['$scope', function($scope) {
		// Initialize
		$scope.initialize = window.initialize;
		var google = window.google;
		
		$scope.initialize = function(canvas, long, lat) {
			var mapCanvas = document.getElementById(canvas);
			var mapOptions = {
				center: new google.maps.LatLng(long, lat),
				zoom: 8,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

        	var map = new google.maps.Map(mapCanvas, mapOptions);
        	map.set('styles', [
			  {
			    featureType: 'landscape',
			    elementType: 'geometry',
			    stylers: [
			      { hue: '#ffff00' },
			      { gamma: 1.4 },
			      { saturation: 82 },
			      { lightness: 96 }
			    ]
			  }
			]);
      };

      $scope.initialize('endorphin', 44.5403, -78.5463);
      $scope.initialize('puravida', 44.5403, -78.5463);
		
	}
]);