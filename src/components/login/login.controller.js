angular.module('todolistApp').controller('LoginController', function ($scope, $state) {
  (() => {
    // Main
  })();

  $scope.signUp = () => {
    $state.go('create-team');
  };

  $scope.login = () => {
    $state.go('dashboard');
  };
});