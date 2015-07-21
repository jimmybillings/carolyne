
angular.module('core').controller('PracticeController', ['$scope', function($scope) {
	// Initialize
  $scope.initialize = window.initialize;
  var google = window.google;

  $scope.initialize = function(canvas, long, lat) {
    var mapCanvas = document.getElementById(canvas);
    var myLatlng = new google.maps.LatLng(long,lat);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
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
   	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
	});

  };

  $scope.initialize('parkhill-endorphin', 39.7497516, -104.9173012);
  $scope.initialize('citypark-endorphin', 39.7400787, -104.9498906);
		
	}
]);