// Test cases for MenuController in the confusionApp module
describe('DishCommentController', function() {
    //load the controller's module
    beforeEach(module('confusionApp'));
    // declare local variables which are to be used in the test suite
    var MenuController, $scope, rating = ['1', '2', '3', '4', '5'];

    beforeEach(inject(function($controller, _$rootScope_) {
        // The injector unwraps the underscores from around the parameter names when matching

        // Generate a new scope
        $scope = _$rootScope_.$new();
        // Initializing the controller
        DishCommentController = $controller('DishCommentController', {
            $scope: $scope
        });
        $scope.myForm = {
            $valid: true,
            $setPristine: function() {}
        };
        $scope.arrayofFeedback = [];
        $scope.rating = rating;
        $scope.dish = {
            comments: []
        };
        $scope.ratingNeeded = false;
    }));

    it('should set ratingNeeded to true if rating not given', function() {
        spyOn($scope, "feedback");
        spyOn($scope, "arrayofComments");
        $scope.feedback.rating = "";
        $scope.sendFeedback();
        expect($scope.ratingNeeded).toBeTruthy();
    });

    it('should add feedback to fedback array if rating is true and my form is valid', function() {
        expect($scope.myForm.$valid).toBe(true);
        $scope.feedback.rating = "5";
        $scope.sendFeedback();
        expect($scope.ratingNeeded).toBe(false);

    });

});
