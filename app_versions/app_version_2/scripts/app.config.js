angular.module('confusionApp')
    .config(['$routeProvider',
      function config($routeProvider){

        $routeProvider.
          when('/menu' , {
            templateUrl: 'menu.html'
          }).
          when('/menu/:id' , {
            templateUrl:'dishdetail.html'
          }).
          when('/contactus',{
            templateUrl:'contactus.html'
          }).
          otherwise('/contactus');
      }]);
