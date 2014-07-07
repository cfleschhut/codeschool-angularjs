'use strict';

/* custom directives */

angular.module('store-products', [])

  .directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/product-title.html'
    };
  })

  .directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/product-description.html'
    };
  })

  .directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/product-panels.html',
      controller: function() {
        this.tab = 3;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
