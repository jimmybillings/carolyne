'use strict';
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = function () {
    // Init module configuration options
    var applicationModuleName = 'carolyne-billings-yoga';
    var applicationModuleVendorDependencies = [
        'ui.router',
        'ngResource',
        'ngSanitize',
        'ui.bootstrap'
      ];
    // Add a new vertical module
    var registerModule = function (moduleName) {
      // Create angular module
      angular.module(moduleName, []);
      // Add the module to the AngularJS configuration file
      angular.module(applicationModuleName).requires.push(moduleName);
    };
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  }();'use strict';
//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_')
    window.location.hash = '#!';
  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
// Setting up route
angular.module('core').config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect to home view when route not found
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: true
    // })
    $urlRouterProvider.otherwise('/');
    // Home state routing
    $stateProvider.state('offerings', {
      url: '/offerings',
      templateUrl: 'modules/core/views/offerings.client.view.html',
      controller: 'OfferingsController'
    }).state('corporate', {
      url: '/offerings/corporate',
      templateUrl: 'modules/core/views/corporate.client.view.html',
      controller: 'CorporateController as corporate'
    }).state('private', {
      url: '/offerings/private',
      templateUrl: 'modules/core/views/private.client.view.html',
      controller: 'PrivateController as private'
    }).state('contact', {
      url: '/contact',
      templateUrl: 'modules/core/views/contact.client.view.html',
      controller: 'ContactController'
    }).state('doterra', {
      url: '/doterra',
      templateUrl: 'modules/core/views/doterra.client.view.html',
      controller: 'DoterraController'
    }).state('about', {
      url: '/about',
      templateUrl: 'modules/core/views/about.client.view.html',
      controller: 'AboutController'
    }).state('practice', {
      url: '/practice',
      templateUrl: 'modules/core/views/practice.client.view.html',
      controller: 'PracticeController'
    }).state('Home', {
      url: '/',
      templateUrl: 'modules/core/views/home.client.view.html',
      controller: 'HomeController as home'
    });
  }
]).run([
  '$rootScope',
  '$state',
  function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = 0;
    });
  }
]);angular.module('core').controller('AboutController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
angular.module('core').controller('ClassesController', [
  '$scope',
  function ($scope) {
    // Initialize
    $scope.initialize = window.initialize;
    var google = window.google;
    $scope.initialize = function (canvas, long, lat) {
      var mapCanvas = document.getElementById(canvas);
      var mapOptions = {
          center: new google.maps.LatLng(long, lat),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(mapCanvas, mapOptions);
      map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { gamma: 1.4 },
            { saturation: 82 },
            { lightness: 96 }
          ]
        }]);
    };
    $scope.initialize('endorphin', 44.5403, -78.5463);
    $scope.initialize('puravida', 44.5403, -78.5463);
  }
]);angular.module('core').controller('ContactController', [
  '$scope',
  'ValidationService',
  'Contact',
  function ($scope, ValidationService, Contact) {
    Contact.then(function (response) {
      $scope.fields = response.fields;
      console.log($scope.fields);
    });
  }
]);'use strict';
angular.module('core').controller('CorporatePrivateController', [
  '$scope',
  function ($scope) {
  }
]);angular.module('core').controller('CorporateController', function () {
});angular.module('core').controller('DoterraController', [
  '$scope',
  function ($scope) {
  }
]);angular.module('core').controller('FooterController', [
  '$scope',
  function ($scope) {
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
]);angular.module('core').controller('HeaderController', [
  '$scope',
  'Menus',
  function ($scope, Menus) {
    $scope.init = function () {
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
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);angular.module('core').controller('HomeController', function () {
});angular.module('core').controller('OfferingsController', [
  '$scope',
  function ($scope) {
  }
]);angular.module('core').controller('PracticeController', [
  '$scope',
  function ($scope) {
    // Initialize
    $scope.initialize = window.initialize;
    var google = window.google;
    $scope.initialize = function (canvas, long, lat) {
      var mapCanvas = document.getElementById(canvas);
      var myLatlng = new google.maps.LatLng(long, lat);
      var mapOptions = {
          center: myLatlng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(mapCanvas, mapOptions);
      map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { gamma: 1.4 },
            { saturation: 82 },
            { lightness: 96 }
          ]
        }]);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map
        });
    };
    $scope.initialize('parkhill-endorphin', 39.7497516, -104.9173012);
    $scope.initialize('citypark-endorphin', 39.7400787, -104.9498906);
  }
]);angular.module('core').controller('PrivateController', function () {
});angular.module('core').factory('ValidationService', function () {
  return {
    validate: function (fields, errors) {
      fields.filter(function (field) {
        delete field.error;
        field.error = errors.hasOwnProperty(field.name) ? errors[field.name][0] : null;
      });
      return fields;
    }
  };
});angular.module('core').factory('About', [function () {
    // About service logic
    // ...
    // Public API
    return {
      someMethod: function () {
        return true;
      }
    };
  }]);angular.module('core').factory('Classes', [function () {
    // Classes service logic
    // ...
    // Public API
    return {
      someMethod: function () {
        return true;
      }
    };
  }]);angular.module('core').factory('Contact', [
  '$resource',
  function ($resource) {
    // Contact service logic
    // ...
    // Public API
    return $resource('contact/form').get().$promise;
  }
]);angular.module('core').factory('CorporatePrivate', [function () {
    // Corporate private service logic
    // ...
    // Public API
    return {
      someMethod: function () {
        return true;
      }
    };
  }]);angular.module('core').factory('Doterra', [function () {
    // Doterra service logic
    // ...
    // Public API
    return {
      someMethod: function () {
        return true;
      }
    };
  }]);angular.module('core').factory('Forms', [
  '$resource',
  function ($resource) {
    return $resource('/email', {}, {});  // // Public API
                                         // return {
                                         // 	newsLetterSignUp: function(email) {
                                         // 		api.email.save({'email':email}).$promise.then(function(response) {
                                         // 		});
                                         // 	}
                                         // };
  }
]);var Instafeed, root;
function Instafeed(params) {
  var option, value;
  this.options = {
    user_id: 'USER_ID',
    access_token: 'ACCESS_TOKEN'
  };
  if (typeof params === 'object') {
    for (option in params) {
      value = params[option];
      this.options[option] = value;
    }
  }
}
Instafeed.prototype._urlBuilder = function () {
  var accessToken, baseUrl, callback, count, media, user;
  baseUrl = 'https://api.instagram.com/';
  user = 'v1/users/' + this.options.user_id;
  media = '/media/recent/';
  accessToken = '?access_token=' + this.options.access_token;
  count = '&count=8';
  callback = '&callback=feed._feed';
  this.script = '' + baseUrl + user + media + accessToken + count + callback;
};
Instafeed.prototype._buildScript = function () {
  var instaScript;
  instaScript = document.createElement('script');
  instaScript.src = this.script;
  document.getElementsByTagName('head')[0].appendChild(instaScript);
};
Instafeed.prototype._feed = function (response) {
  var section, d, a, img, result, _i, _len, _ref, _results;
  if (typeof response !== 'object') {
    if (this.options.error !== null && typeof this.options.error === 'function') {
      this.options.error.call(this, 'Invalid JSON data');
      return false;
    } else {
      throw new Error('Invalid JSON response');
    }
  }
  if (response.meta.code !== 200) {
    if (this.options.error !== null && typeof this.options.error === 'function') {
      this.options.error.call(this, response.meta.error_message);
      return false;
    } else {
      throw new Error('Error from Instagram: ' + response.meta.error_message);
    }
  }
  if (response.data.length === 0) {
    if (this.options.error !== null && typeof this.options.error === 'function') {
      this.options.error.call(this, 'No images were returned from Instagram');
      return false;
    } else {
      throw new Error('No images were returned from Instagram');
    }
  }
  _ref = response.data;
  _results = [];
  section = document.querySelector('.instagram');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    result = _ref[_i];
    d = document.createElement('div');
    d.className = 'col-xs-3';
    a = document.createElement('a');
    a.href = result.images.standard_resolution.url;
    img = document.createElement('img');
    img.src = result.images.low_resolution.url;
    a.appendChild(img);
    d.appendChild(a);
    _results.push(section.appendChild(d));
  }
  return _results;
};
Instafeed.prototype._run = function () {
  if (typeof this.options.user_id !== 'string') {
    throw new Error('your need to enter a user id');
  } else if (typeof this.options.access_token !== 'string') {
    throw new Error('your need to enter a access token');
  } else {
    this._urlBuilder();
    this._buildScript();
  }
};
root = typeof exports !== 'undefined' && exports !== null ? exports : window;
root.Instafeed = Instafeed;//Menu service used for managing  menus
angular.module('core').service('Menus', [function () {
    // Define a set of default roles
    this.defaultRoles = ['user'];
    // Define the menus object
    this.menus = {};
    // A private function for rendering decision 
    var shouldRender = function (user) {
      if (user) {
        for (var userRoleIndex in user.roles) {
          for (var roleIndex in this.roles) {
            if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
              return true;
            }
          }
        }
      } else {
        return this.isPublic;
      }
      return false;
    };
    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exists');
        }
      } else {
        throw new Error('MenuId was not provided');
      }
      return false;
    };
    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      return this.menus[menuId];
    };
    // Add new menu object by menu id
    this.addMenu = function (menuId, isPublic, roles) {
      // Create the new menu
      this.menus[menuId] = {
        isPublic: isPublic || false,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      };
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      delete this.menus[menuId];
    };
    // Add menu item object
    this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Push new menu item
      this.menus[menuId].items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || '/' + menuItemURL,
        isPublic: isPublic || this.menus[menuId].isPublic,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      });
      // Return the menu object
      return this.menus[menuId];
    };
    // Add submenu item object
    this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: menuItemTitle,
            link: menuItemURL,
            uiRoute: menuItemUIRoute || '/' + menuItemURL,
            isPublic: isPublic || this.menus[menuId].isPublic,
            roles: roles || this.defaultRoles,
            shouldRender: shouldRender
          });
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
  }]);'use strict';
// Config HTTP Error Handling
angular.module('users').config([
  '$httpProvider',
  function ($httpProvider) {
    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push([
      '$q',
      '$location',
      'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
            case 401:
              // Deauthenticate the global user
              Authentication.user = null;
              // Redirect to signin page
              $location.path('signin');
              break;
            case 403:
              // Add unauthorized behaviour 
              break;
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);'use strict';
// Setting up route
angular.module('users').config([
  '$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider.state('profile', {
      url: '/settings/profile',
      templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
    }).state('password', {
      url: '/settings/password',
      templateUrl: 'modules/users/views/settings/change-password.client.view.html'
    }).state('accounts', {
      url: '/settings/accounts',
      templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'modules/users/views/signup.client.view.html'
    }).state('signin', {
      url: '/signin',
      templateUrl: 'modules/users/views/signin.client.view.html'
    });
  }
]);'use strict';
angular.module('users').controller('AuthenticationController', [
  '$scope',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    //If user is signed in then redirect back home
    if ($scope.authentication.user)
      $location.path('/');
    $scope.signup = function () {
      $http.post('/auth/signup', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    $scope.signin = function () {
      $http.post('/auth/signin', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
angular.module('users').controller('SettingsController', [
  '$scope',
  '$http',
  '$location',
  'Users',
  'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;
    // If user is not signed in then redirect back home
    if (!$scope.user)
      $location.path('/');
    // Check if there are additional accounts 
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }
      return false;
    };
    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || $scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider];
    };
    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;
      $http.delete('/users/accounts', { params: { provider: provider } }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    // Update a user profile
    $scope.updateUserProfile = function () {
      $scope.success = $scope.error = null;
      var user = new Users($scope.user);
      user.$update(function (response) {
        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };
    // Change user password
    $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null;
      $http.post('/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
// Authentication service for user variables
angular.module('users').factory('Authentication', [function () {
    var _this = this;
    _this._data = { user: window.user };
    return _this._data;
  }]);'use strict';
// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', [
  '$resource',
  function ($resource) {
    return $resource('users', {}, { update: { method: 'PUT' } });
  }
]);