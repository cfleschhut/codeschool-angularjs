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
  .controller('StoreController', function() {

    this.products = [
      {
        name: 'A Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '2',
        canPurchase: true,
        soldOut: false,
        images: [
          {
            full: 'http://placekitten.com/200',
            thumb: 'http://placekitten.com/75'
          },
          {
            full: 'http://placekitten.com/200',
            thumb: 'http://placekitten.com/75'
          }
        ],
        reviews: [
          {
            stars: 5,
            body: 'review 1 content',
            author: 'reviewer@example.com',
            createdOn: 1404738261948
          },
          {
            stars: 4,
            body: 'review 2 content',
            author: 'reviewer@example.com',
            createdOn: 1304738261948
          }
        ]
      },
      {
        name: 'B Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '3.95',
        canPurchase: true,
        soldOut: false,
        images: [
          {
            full: 'http://placekitten.com/200',
            thumb: 'http://placekitten.com/75'
          },
          {
            full: 'http://placekitten.com/200',
            thumb: 'http://placekitten.com/75'
          }
        ],
        reviews: [
          {
            stars: 5,
            body: 'review 1 content',
            author: 'reviewer@example.com',
            createdOn: 1204738261948
          },
          {
            stars: 4,
            body: 'review 2 content',
            author: 'reviewer@example.com',
            createdOn: 1104738261948
          }
        ]
      }
    ];

  })

  /* ReviewController */
  .controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = new Date();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
