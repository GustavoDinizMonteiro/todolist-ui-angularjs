(function () {
  'use strict';
  /**
   * User authentication service.
   * @module AuthenticationService
   */
  angular.module('todolistApp')
    .factory('AuthenticationService', ['$http', '$window', 'HTTP_CONSTANTS', 
                                        'API_ENDPOINTS', 'MESSAGES', 'HTTP_CODES', Service]);

  function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES, HTTP_CODES) {
    var service = {};
    service.login = login;

    return service;

    /**
     * Perform the authentication of the user and in case it occurs 
     * successfully save your id and authentication token in the local memory.
     * @param {object} user - User data with email and password of user.
     * @param {function} callback - Callback function.
     * @method login
     */
    function login(user, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.LOGIN;

      $http.post(url, user).then(success, err);

      function success(response) {
        $window.localStorage.userId = response.data.user_id;
        $window.localStorage.token = response.data.auth_token;

        console.log(MESSAGES.LOGIN_SUCCESS);
        callback(true);
      }

      function err(err) {
        if (err.code === HTTP_CODES.UNAUTHORIZED) {
          console.log(MESSAGES.LOGIN_FAIL);
        }
        callback(false);
      }

    }

  }
})();
