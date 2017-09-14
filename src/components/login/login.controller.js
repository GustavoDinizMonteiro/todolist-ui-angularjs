(function () {
  'use strict';
  
  angular.module('todolistApp')
    .controller('LoginController', ['$scope', '$state', function ($scope, $state) {
      
      (function main() {
        // Main
      })();

      $scope.signUp = function () {
        $state.go('signup');
      };

      $scope.login = function () {
        $state.go('dashboard');
      };
    }]);

})();