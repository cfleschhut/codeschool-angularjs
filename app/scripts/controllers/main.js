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

  })

  /* StoreController */
  .controller('StoreController', ['$http', function($http) {

    var store = this;
    store.products = [];

    $http.get('/products.json')
      .success(function(data) {
        store.products = data;
      });

  }])

  /* ReviewController */
  .controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = new Date();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
