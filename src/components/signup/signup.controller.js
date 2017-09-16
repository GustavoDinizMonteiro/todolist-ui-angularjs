(function () {
  'use strict';
  /**
   * @module singUp
   */
  angular.module('todolistApp')
    .controller('SignUpController', ['$scope', '$state', 'UserService',
      function ($scope, $state, UserService) {

        $scope.user = {};
        
        /**
         * Creates a new user based on information passed on the form by him. 
         * If the operation is performed successfully navigate to the login screen 
         * so that the user can authenticate, if it does not remain the same one.
         * @method submit
         */
        $scope.submit = function () {
          UserService.createUser($scope.user, function (success) {
            if (success) {
              $state.go('login');
            }
          });
        };
      }
    ]);
})();