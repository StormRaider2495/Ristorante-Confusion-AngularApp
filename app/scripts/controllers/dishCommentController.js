'use strict';
angular.module('confusionApp').controller('DishCommentController', ['$scope', function($scope) {

    var rating = ['1', '2', '3', '4', '5'];

    $scope.rating = rating;

    $scope.feedback = {
        rating: "",
        author: "",
        comment: "",
        date: ""
    };

    $scope.arrayofComments = [];

    $scope.ratingNeeded = false;

    $scope.sendFeedback = function() {
        if ($scope.feedback.rating == "") {
            $scope.ratingNeeded = true;
        }
        if ($scope.myForm.$valid && $scope.feedback.rating !== "") {
            $scope.feedback.date = new Date().toISOString();
            $scope.arrayofComments.push($scope.feedback);
            console.log($scope.arrayofComments);
            $scope.dish.comments.push($scope.feedback);
            $scope.ratingNeeded = false;
            $scope.feedback = {
                rating: "",
                author: "",
                comment: "",
                date: ""
            };
            $scope.myForm.$setPristine();
        }
    }
}]);
