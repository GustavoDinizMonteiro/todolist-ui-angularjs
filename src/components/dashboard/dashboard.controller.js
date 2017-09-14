(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', function ($scope) {
      
      (function main() {
        // Main
      })();

      // Mock
      $scope.tasks = [
        { name: 'Create authetication', finished: false, text: '...' },
        { name: 'Config linter', finished: false, text: '---' }
      ];
    }]);
    
})();