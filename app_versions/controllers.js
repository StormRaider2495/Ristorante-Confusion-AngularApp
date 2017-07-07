'use strict';
angular.module('confusionApp')

    .controller('MenuController', ['$scope', 'dataFactory', function($scope, dataFactory) {      

        dataFactory.getData().then(function(data){
          $scope.dishes = data.dishes;
        });

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.select = function(setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };
        $scope.isSelected = function(checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }])
    .controller('DishDetailController', ['$scope', 'dataFactory', '$stateParams',
        function($scope, dataFactory, $stateParams) {
            dataFactory.getData().then(function(data){
              $scope.dish = data.dishes[parseInt($stateParams.id, 10)];
            });
            $scope.orderProp = "-rating";
        }
    ])

    .controller('DishCommentController', ['$scope', function($scope) {

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
    }])
    .controller('ContactController', ['$scope', function($scope) {

        $scope.arrayofFeedback = [];
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };
        var channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];

        $scope.channels = channels;

        $scope.invalidChannelSelection = false;

        if ($scope.feedback.mychannel !== "") {
            $scope.invalidChannelSelection = false;
        }
    }])

    .controller('FeedbackController', ['$scope', function($scope) {


        $scope.sendFeedback = function() {
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
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
                console.log($scope.arrayofFeedback);
            }
        };
    }])

    .controller('AboutController', ['$scope', 'dataFactory', function($scope, dataFactory) {
        dataFactory.getData().then(function(data){
          $scope.leadership = data.leadership;
        });
    }])

    .controller('HomeController', ['$scope', 'dataFactory', function($scope, dataFactory) {

        dataFactory.getData().then(function(data){
          $scope.dish = data.dishes[0];
          $scope.leader = data.leadership[0];
          $scope.promo = data.promotions[0];
        });
    }])


;
