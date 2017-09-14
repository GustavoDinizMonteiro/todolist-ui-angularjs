(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('LoginController', ['$scope', '$state', 'AuthenticationService', function ($scope, $state, AuthenticationService) {

      (function main() {
        // Main
      })();

      $scope.user = {};

      $scope.signUp = function () {
        $state.go('signup');
      };

      $scope.login = function () {
        AuthenticationService.login($scope.user, function (success) {
          if (success) {
            $state.go('dashboard');
          }
        });
      };

    }]);

})();
