'use strict';
angular.module('confusionApp').controller('HomeController', ['$scope', 'dataFactory', function($scope, dataFactory) {

    dataFactory.getData().then(function(data){
      $scope.dish = data.dishes[0];
      $scope.leader = data.leadership[0];
      $scope.promo = data.promotions[0];
    });

}]);
