angular.module('todolistApp').controller('SignUpController', function ($scope, $state) {
  (() => {
    // Main
  })();

  $scope.admin = {};

  $scope.submit = (user) => {
    // Not implemented

    $state.go('dashboard');
  };
});