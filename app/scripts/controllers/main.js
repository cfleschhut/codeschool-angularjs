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
            author: 'reviewer@example.com'
          },
          {
            stars: 4,
            body: 'review 2 content',
            author: 'reviewer@example.com'
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
            author: 'reviewer@example.com'
          },
          {
            stars: 4,
            body: 'review 2 content',
            author: 'reviewer@example.com'
          }
        ]
      }
    ];

  });

/* PanelController */
angular.module('angularApp')
  .controller('PanelController', function() {
    this.tab = 3;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

/* ReviewController */
angular.module('angularApp')
  .controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
