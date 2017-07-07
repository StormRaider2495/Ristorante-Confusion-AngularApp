// Test cases for MenuController in the confusionApp module
describe('DishDetailController', function() {

    beforeEach(module('confusionApp')); //load the controller's module
    // declare local variables which are to be used in the test suite
    var MenuController, $scope, $httpBackend, dataFactory, $q, deferred, demoData, stateParams;
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

    beforeEach(inject(function($controller, _$rootScope_, _$q_, _dataFactory_,_$stateParams_) {

        // The injector unwraps the underscores from around the parameter names when matching

        $q = _$q_; // We use the $q service to create a mock instance of defer
        deferred = _$q_.defer(); // Expose the factory to the tests
        dataFactory = _dataFactory_;
        stateparams=_$stateParams_;
        //mock your stateparams object with your id
        // Use a Jasmine Spy to return the deferred promise
        spyOn(dataFactory, 'getData').and.returnValue(deferred.promise);
        $scope = _$rootScope_.$new(); // Generate a new scope
        // Init the controller, passing our spy service instance
        DishDetailController = $controller('DishDetailController', {
            "$scope": $scope,
            "dataFactory": _dataFactory_,
            "stateParams": stateparams
        });

    }));

    it('should call getData in dataFactory', function() {
        expect(dataFactory.getData).toHaveBeenCalled();
        expect(dataFactory.getData.calls.count()).toBe(1);
    });


    it('should resolve promise when passed true', function() {
        dataFactory
            .getData(true)
            .then(function(data) {
                expect(data).toBe(demoData);
                done();
            });
        $scope.$digest();
    });

    it('should have data assigned on async call', function() {
        deferred.resolve(demoData);
        $scope.$digest();
        expect($scope.dish).toBe(demoData.dishes[1]);
    });

});
