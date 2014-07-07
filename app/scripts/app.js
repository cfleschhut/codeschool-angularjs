'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


/* custom directives */
angular.module('angularApp')
  .directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/product-title.html'
    };
  });

angular.module('angularApp')
  .directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/product-description.html'
    };
  });
