'use strict';
angular.module('confusionApp').controller('DishDetailController', ['$scope', 'dataFactory', '$stateParams',
    function($scope, dataFactory, $stateParams) {
        dataFactory.getData().then(function(data){
          $scope.dish = data.dishes[parseInt($stateParams.id, 10)];
        });
        $scope.orderProp = "-rating";
    }
]);
