'use strict';
angular.module('confusionApp').controller('FeedbackController', ['$scope', function($scope) {


    $scope.sendFeedback = function() {
        if ($scope.feedback.agree && $scope.feedback.mychannel == "") {
            $scope.invalidChannelSelection = true;
        } else {
            $scope.arrayofFeedback.push($scope.feedback);
            $scope.invalidChannelSelection = false;
            $scope.feedback = {
                mychannel: "",
                firstName: "",
                lastName: "",
                agree: false,
                email: ""
            };
            $scope.feedback.mychannel = "";
            $scope.myForm.$setPristine();
            // console.log($scope.arrayofFeedback);
        }
    };
}]);
