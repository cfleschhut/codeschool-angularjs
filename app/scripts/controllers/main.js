'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

/* StoreController */
angular.module('angularApp')
  .controller('StoreController', function() {

    this.products = [
      {
        name: 'Product 1',
        description: 'lorem ipsum dolor',
        price: '2.95',
        canPurchase: true,
        soldOut: false
      },
      {
        name: 'Product 2',
        description: 'lorem ipsum dolor',
        price: '3.95',
        canPurchase: true,
        soldOut: false
      }
    ];

});
