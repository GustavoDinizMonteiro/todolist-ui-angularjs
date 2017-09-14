(function () {
  'use strict';

  angular.module('todolistApp').factory('AuthenticationService', ['$http', '$window', Service]);

  function Service($http, $window) {
    var service = {};
    service.login = login;

    return service;

    function login(user, callback) {
      var API = 'http://localhost:3000/authenticate';

      $http.post(API, user).then(success, err);

      function success(response) {
        $window.localStorage.userId = response.data.user_id;
        $http.defaults.headers.common.Authorization = response.data.auth_token;
        callback(true);
      }

      function err(err) {
        callback(false);
      }

    }

  }
})();
