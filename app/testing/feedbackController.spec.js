// Test cases for MenuController in the confusionApp module
describe('FeedbackController', function() {
    //load the controller's module
    beforeEach(module('confusionApp'));
    // declare local variables which are to be used in the test suite
    var MenuController, $scope;

    beforeEach(inject(function($controller, _$rootScope_) {
        // The injector unwraps the underscores from around the parameter names when matching

        // Generate a new scope
        $scope = _$rootScope_.$new();
        $scope.myForm = {
            $valid: true,
            $setPristine: function() {}
        };
        $scope.arrayofFeedback = [];
        $scope.feedback = {};

        // Initializing the controller
        MenuController = $controller('FeedbackController', {
            $scope: $scope
        });
    }));

    it('should have invalid channel selection when feedback is aggreed but no channel is selected ', function() {
        $scope.feedback.agree = true;
        $scope.feedback.mychannel = "";
        $scope.sendFeedback();
        expect($scope.invalidChannelSelection).toBeTruthy();
    });

    it('should have valid channel selection when a channel is selected ', function() {
        $scope.feedback.agree = true;
        $scope.feedback.mychannel = "tel";
        $scope.sendFeedback();
        expect($scope.invalidChannelSelection).toBeFalsy();
    });

});
