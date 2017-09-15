(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', 'UserService',
      function ($scope, UserService) {
        $scope.user = {};

        (function main() {
          UserService.getUser(function (data) {
            if (data) {
              $scope.user = data;
            }
          });
        })();

      }
    ]);
})();