'use strict';
angular.module('confusionApp')

    .controller('MenuController', ['$scope','menuFactory', function($scope,menuFactory) {

        $scope.dishes = menuFactory.getDishes();
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
    .controller('DishDetailController', ['$scope','menuFactory','$routeParams',
    function($scope,menuFactory,$routeParams) {
        var dish=menuFactory.getDish(parseInt($routeParams.id,10));
        $scope.dish = dish;
        $scope.orderProp = "-rating";

        //console.log( angular.element("'#"+$scope.dish.name+"'"));

    }])

    .controller('DishCommentController', ['$scope', function($scope) {

      var rating= ['1','2','3','4','5'];

      $scope.rating = rating;

        $scope.feedback = {
            rating: "",
            author: "",
            comment: "",
            date : ""
        };

        $scope.arrayofComments = [];

        $scope.ratingNeeded = false;

        $scope.sendFeedback = function(){
          if($scope.feedback.rating == ""){
              $scope.ratingNeeded = true;
          }
          if($scope.myForm.$valid && $scope.feedback.rating !== ""){
            $scope.feedback.date = new Date().toISOString();
            //console.log($scope.feedback);
            $scope.arrayofComments.push($scope.feedback);
            //console.log($scope.arrayofComments);
            $scope.dish.comments.push($scope.feedback);
            $scope.ratingNeeded = false;
            $scope.feedback = {
                rating: "",
                author: "",
                comment: "",
                date : ""
            };
            $scope.myForm.$setPristine();
          }
        }
    }])
    .controller('ContactController', ['$scope', function($scope) {

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

        if($scope.feedback.mychannel !== ""){
            $scope.invalidChannelSelection = false;
        }
    }])

    .controller('FeedbackController', ['$scope', function($scope) {

        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
              $scope.invalidChannelSelection = true;
              console.log('incorrect');
             } else {
              $scope.invalidChannelSelection = false;
              $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                    agree:false, email:"" };
              $scope.feedback.mychannel="";
              $scope.myForm.$setPristine();
              console.log($scope.feedback);
            }
         };
     }])

     ;
