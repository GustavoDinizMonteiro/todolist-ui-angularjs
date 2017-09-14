(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('SignUpController', ['$scope', '$state', function ($scope, $state) {

      (function main() {
        // Main
      })();

      $scope.admin = {};

      $scope.submit = function (user) {
        // Not implemented

        $state.go('dashboard');
      };
    }]);

})();