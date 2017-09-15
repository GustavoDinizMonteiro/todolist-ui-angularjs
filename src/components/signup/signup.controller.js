(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('SignUpController', ['$scope', '$state', 'UserService',
      function ($scope, $state, UserService) {

        $scope.admin = {};

        $scope.submit = function (user) {
          UserService.createUser(user, function (success) {
            if (success) {
              $state.go('login');
            }
          });
        };
      }
    ]);
})();