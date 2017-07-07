angular.module('confusionApp')
  .factory("dataFactory",['$http','$q', function($http, $q) {
    return {
      getData : function() {
          var deferred = $q.defer();
          $http.get('scripts/data.json')
          .then(function(response){
             deferred.resolve(response.data);
          })
          .catch(function(response){
            deferred.reject(response);
          });
          return deferred.promise;
      }
    };
  }]);
