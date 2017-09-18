(function () {
  'use strict';
  /**
   * @module LoginController
   */
  angular.module('todolistApp')
    .controller('LoginController', ['$scope', '$state', 'AuthenticationService',
      function ($scope, $state, AuthenticationService) {
        
        $scope.user = {};

        /**
         * Navigate to signup page.
         * @method signUp
         */
        $scope.signUp = function () {
          $state.go('signup');
        };

        /**
         * Authenticate the user based on the email and password informed by it and if it 
         * is successfully encrypted it navigates to the dashboard screen, if it remains 
         * in the same one.
         * @method login
         */
        $scope.login = function () {
          AuthenticationService.login($scope.user, function (success) {
            if (success) {
              $state.go('dashboard');
            }
          });
        };

      }
    ]);
})();
