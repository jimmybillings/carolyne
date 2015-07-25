
angular.module('core').controller('FooterController', ['$scope', '$resource',
  function($scope, $resource) {
    
    $scope.signUp = function() {
      $resource('email').save({'email':$scope.email}).$promise
        .then(function(response){
          console.log(response);
          $scope.signedUp = response.success;
        });
    };

    window.feed = new window.Instafeed({
       user_id: '205077230',
       access_token: '205077230.5b9e1e6.bc0cf67e7bda4e9d8ca4410caa691bcf'
    });
    window.feed._run();
  }
]);