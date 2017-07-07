angular.module('confusionApp')
    .config(['$stateProvider', '$urlRouterProvider',

        function config($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                // state route for home page
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'views/header.html'
                        },
                        'content': {
                            templateUrl: 'views/home.html',
                            controller: 'HomeController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                // state route for about us page
                .state('app.aboutus', {
                    url: 'aboutus',
                    views: {
                        'content@': {
                            templateUrl: 'views/aboutus.html',
                            controller: 'AboutController'

                        }
                    }
                })
                // state route for contact us page
                .state('app.contactus', {
                    url: 'contactus',
                    views: {
                        'content@': {
                            templateUrl: 'views/contactus.html',
                            controller: 'ContactController'

                        }
                    }
                })
                // state route for menu page
                .state('app.menu', {
                    url: 'menu',
                    views: {
                        'content@': {
                            templateUrl: 'views/menu.html',
                            controller: 'MenuController'
                        }
                    }
                })
                // state route for menu detail page
                .state('app.dishdetails', {
                    url: 'menu/:id',
                    views: {
                        'content@': {
                            templateUrl: 'views/dishdetail.html',
                            controller: 'DishDetailController'
                        }
                    }
                });

        }
    ]);
