describe('HomeController', function() {

    var ctrl, $scope, $httpBackend, dataFactory, $q, deferred, demoData, thenObj,
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

    beforeEach(module('confusionApp'));

    beforeEach(inject(function($controller, _$rootScope_, _$q_, _dataFactory_) {
        $q = _$q_;
        deferred = _$q_.defer();
        dataFactory = _dataFactory_;
        spyOn(dataFactory, 'getData').and.returnValue(deferred.promise);
        // thenObj = jasmine.createSpyObj("thenObj", ["then"]);

        $scope = _$rootScope_.$new();

        ctrl = $controller('HomeController', {
            $scope: $scope,
            dataFactory: _dataFactory_
        });
    }));

    it('should call getData in dataFactory', function() {
        expect(dataFactory.getData).toHaveBeenCalled();
        expect(dataFactory.getData.calls.count()).toBe(1);
    });

    it('should do something on success', function() {

        deferred.resolve(demoData);
        $scope.$digest();
        expect($scope.dish).toBe(demoData.dishes[0]);
    });

    // it('should get data on promise resolve', function() {
    //   // thenObj.then.and.callFake(function(demoData){
    //   //     $scope.dish = demoData.dishes[0];
    //   // });
    //   dataFactory.getData(true).then(function(data){
    //     $scope.dish = demoData.dishes[0];
    //   });
    //   expect($scope.dish).toBe(demoData.dishes[0]);
    // });


});


//
// describe("HomeController", function() {
//
//     var $controller,controller, dataFactory, $scope, someValue = "return success";
//
//     beforeEach(function() {
//
//         module("confusionApp");
//
//         module(function($provide) {
//             $provide.value("dataFactory", {
//                 getData: function() {
//                     return {
//                         then: function(callback) {
//                             return someValue;
//                         }
//                     }
//                 }
//             });
//
//             return null;
//         });
//     });
//
//     beforeEach(function() {
//
//         inject(function($controller, _$rootScope_, _dataFactory_) {
//           $scope = _$rootScope_.$new();
//           dataFactory = _dataFactory_;
//           controller = $controller('HomeController',{
//             $scope : $scope
//           });
//         });
//     });
//
//     it("should call the dataFactory factory method to retrieve data",function(){
//          var user = { address: {street: 1}};
//          spyOn(dataFactory, 'getData').and.callFake(function(){
//            return user;
//          });
//          expect(dataFactory.getData).toHaveBeenCalled();
//     });
//
// });
