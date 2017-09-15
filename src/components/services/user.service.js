(function () {
  'use strict';

  angular.module('todolistApp')
    .factory('UserService', ['$http', '$window', 'HTTP_CONSTANTS', 'API_ENDPOINTS', 'MESSAGES', Service]);

  function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES) {
    var service = {};
    service.getUser = getUser;
    service.createUser = createUser;

    return service;

    function getUser(callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.USER + $window.localStorage.userId;
      $http.defaults.headers.common.Authorization = $window.localStorage.token;

      $http.get(url).then(success, err);

      function success(response) {
        console.log(MESSAGES.FETCH_USER_SUCCESS);
        callback(response.data);
      }

      function err(err) {
        callback(false);
      }
    }

    function createUser(user, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.USER;

      $http.post(url, user).then(success, err);

      function success(response) {
        console.log(MESSAGES.CREATE_USER_SUCCESS);
        callback(response.data);
      }

      function err(err) {
        callback(false);
      }
    }

  }
})();
