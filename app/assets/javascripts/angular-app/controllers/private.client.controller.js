angular.module('core').controller('PrivateController', ['Restangular', function(Restangular) {
        // This provides Authentication context.
  var _this = this;
  Restangular.setBaseUrl("/api");
      
  
}]);
