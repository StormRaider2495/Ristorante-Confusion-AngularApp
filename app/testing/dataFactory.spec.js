describe('factory:dataFactory', function() {
    var factory,
        $httpBackend,
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

    beforeEach(inject(function(dataFactory, _$httpBackend_) {
        factory = dataFactory;
        $httpBackend = _$httpBackend_;
    }));

    it('Should have methods defined', function() {
        expect(factory.getData).toBeDefined()
    });

    it("should check getData function", function() {
        var dataPromise = factory.getData();
        $httpBackend.when('GET', 'scripts/data.json').respond(200, demoData);
        $httpBackend.flush();
        dataPromise.then(function(response) {
            expect(response).toBe('demoData');
        });
    });

});
