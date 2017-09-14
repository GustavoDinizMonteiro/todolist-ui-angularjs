(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', 'UserService', function ($scope, UserService) {
      $scope.user = {};
      (function main() {
        UserService.getUser(function (data) {
          if (data) {
            $scope.user = data;
            console.log($scope.user);
          }
        });
      })();

      // Mock
      $scope.tasks = [
        { name: 'Create authetication', finished: false, text: '...' },
        { name: 'Config linter', finished: false, text: '---' }
      ];
    }]);
    
})();