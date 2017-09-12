angular.module('todolistApp').controller('LoginController', function ($scope, $state) {
  (() => {
    // Main
  })();

  $scope.signUp = () => {
    $state.go('signup');
  };

  $scope.login = () => {
    $state.go('dashboard');
  };
});