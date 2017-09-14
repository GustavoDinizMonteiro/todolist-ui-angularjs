(function () {
    'use strict';
  
    angular.module('todolistApp').factory('UserService', ['$http', '$window', Service]);
  
    function Service($http, $window) {
      var service = {};
      service.getUser = getUser;
  
      return service;
  
      function getUser(callback) {
        var API = 'http://localhost:3000/users/' + $window.localStorage.userId;
  
        $http.get(API).then(success, err);
  
        function success(response) {
          callback(response.data);
        }
  
        function err(err) {
          callback(false);
        }
      }
  
    }
  })();
  