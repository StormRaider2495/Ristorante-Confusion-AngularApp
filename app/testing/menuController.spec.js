// Test cases for MenuController in the confusionApp module
describe('MenuController', function() {
    // declare local variables which are to be used in the test suite
    var MenuController, $scope, $httpBackend, dataFactory, $q, deferred, demoData;
    demoData = {
        "dishes": [{
            "id": 0,
            "name": "Uthapizza",
            "image": "images/uthapizza.png",
            "category": "mains",
            "label": "Hot",
            "price": "4.99",
            "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
            "comments": [{
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
            }]
        }],
        "promotions": [{
            "id": 0,
            "name": "Weekend Grand Buffet",
            "image": "images/buffet.png",
            "label": "New",
            "price": "19.99",
            "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
        }],
        "leadership": [{
            "id": 0,
            "name": "Peter Pan",
            "image": "images/alberto.png",
            "designation": "Chief Epicurious Officer",
            "abbr": "CEO",
            "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
        }],
        "feedback": []
    };


    //load the controller's module
    beforeEach(module('confusionApp'));

    beforeEach(inject(function($controller, _$rootScope_, _$q_, _dataFactory_) {
        // The injector unwraps the underscores from around the parameter names when matching

        $q = _$q_;
        deferred = _$q_.defer(); // We use the $q service to create a mock instance of defer
        dataFactory = _dataFactory_; // Expose the factory to the tests
        // Use a Jasmine Spy to return the deferred promise
        spyOn(dataFactory, 'getData').and.returnValue(deferred.promise);
        $scope = _$rootScope_.$new(); // Generate a new scope
        // Init the controller, passing our spy service instance
        MenuController = $controller('MenuController', {
            $scope: $scope,
            dataFactory: _dataFactory_
        });

    }));

    it('should call getData in dataFactory', function() {
        expect(dataFactory.getData).toHaveBeenCalled();
        expect(dataFactory.getData.calls.count()).toBe(1);
    });


    it('should resolve promise when passed true', function() {
        deferred.resolve(demoData);
        $scope.$digest();
        expect($scope.dishes).toBe(demoData.dishes);
    });

    // it('should resolve promise', function() {
    //     // Setup the data we wish to return for the .then function in the controller
    //     deferred.resolve([demoData]);
    //
    //     // We have to call apply for this to work
    //     $scope.$apply();
    //
    //     // Since we called apply, not we can perform our assertions
    //     expect($scope.dishes).toBeDefined();
    // });

    // it('should have dishes object defined', function() {
    //     expect($scope.dishes).toBeDefined();
    // });

    // it('should contain dishes object with some value', function() {
    //     var fakeHttpPromise = {
    //         success: function() {}
    //     };    //
    //     spyOn(dataFactory, 'getData').and.returnValue(fakeHttpPromise);
    //     // spyOn(dataFactory, 'getData').andReturn(fakeHttpPromise);
    //     //
    //     // scope.dishes('foo', 'bar');
    //     //
    //     // expect(dataFactory.getData).toHaveBeenCalledWith('bar', 'foo');
    // });

    it('should have showDetails as false', function() {
        expect($scope.showDetails).toBeFalsy();
    });

    it('should change tabs based on select option', function() {
        expect($scope.tab).toEqual(1);
        $scope.select(3);
        expect($scope.tab).toEqual(3);
    });

    it('should toggle details', function() {
        expect($scope.showDetails).toBeFalsy();
        $scope.toggleDetails();
        expect($scope.showDetails).toBeTruthy();
    });

    it('should checkTab on change', function() {
        expect($scope.tab).toEqual(1);
        checkTab = 1;
        expect($scope.isSelected(checkTab)).toEqual(true);
    });

    it('should have filtText on tab select', function() {
        $scope.select(2)
        expect($scope.filtText).toEqual("appetizer");
        $scope.select(3)
        expect($scope.filtText).toEqual("mains");
        $scope.select(4)
        expect($scope.filtText).toEqual("dessert");
        $scope.select()
        expect($scope.filtText).toBe('');
    });
});
