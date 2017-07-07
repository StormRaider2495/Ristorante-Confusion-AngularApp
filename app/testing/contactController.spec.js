// Test cases for MenuController in the confusionApp module
describe('ContactController', function() {
    //load the controller's module
    beforeEach(module('confusionApp'));
    // declare local variables which are to be used in the test suite
    var ContactController, $scope;

    beforeEach(inject(function($controller, _$rootScope_) {
        // The injector unwraps the underscores from around the parameter names when matching

        // Generate a new scope
        $scope = _$rootScope_.$new();
        $scope.ratingNeeded = false;
        // Initializing the controller
        ContactController = $controller('ContactController', {
            $scope: $scope
        });
    }));

    it('should set invalid channel selection to false', function() {
        spyOn($scope, "arrayofFeedback");
        spyOn($scope, "feedback");

        $scope.feedback.mychannel = "tel";
        expect($scope.feedback.mychannel).toBe("tel");
        expect($scope.invalidChannelSelection).toBe(false);
    });

});
