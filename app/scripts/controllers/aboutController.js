'use strict';
angular.module('confusionApp').controller('AboutController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    dataFactory.getData().then(function(data){
      $scope.leadership = data.leadership;
    });
}])
