
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect to home view when route not found
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: true
    // })

    $urlRouterProvider.otherwise('/');

    // Home state routing
    $stateProvider.
    state('offerings', {
      url: '/offerings',
      templateUrl: 'modules/core/views/offerings.client.view.html',
          controller: 'OfferingsController'
    }).
    state('corporate', {
      url: '/offerings/corporate',
      templateUrl: 'modules/core/views/corporate.client.view.html',
          controller: 'CorporateController as corporate'
    }).
    state('private', {
      url: '/offerings/private',
      templateUrl: 'modules/core/views/private.client.view.html',
          controller: 'PrivateController as private'
    }).
    state('contact', {
      url: '/contact',
      templateUrl: 'modules/core/views/contact.client.view.html',
          controller: 'ContactController'
    }).
    state('doterra', {
      url: '/doterra',
      templateUrl: 'modules/core/views/doterra.client.view.html',
          controller: 'DoterraController'
    }).
    state('about', {
      url: '/about',
      templateUrl: 'modules/core/views/about.client.view.html',
          controller: 'AboutController'
    }).
    state('practice', {
      url: '/practice',
      templateUrl: 'modules/core/views/practice.client.view.html',
          controller: 'PracticeController'
    }).
    state('Home', {
      url: '/',
      templateUrl: 'modules/core/views/home.client.view.html',
          controller: 'HomeController as home'
    })
  }
]).run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = 0
  })
}]);