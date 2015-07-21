
angular.module('core').controller('FooterController', ['$scope',
  function($scope) {
    
    // $scope.signUp = function() {
    //   Restangular.setBaseUrl("/api");
    //   Restangular.service('signup.json').post({'email':$scope.email}).then(function(response){
    //     $scope.signedUp = response.success;
    //   });
    // };

    window.feed = new window.Instafeed({
       user_id: '205077230',
       access_token: '205077230.5b9e1e6.bc0cf67e7bda4e9d8ca4410caa691bcf'
    });
    window.feed._run();
  }
]);