angular.module("todolistApp").config(function(stateHelperProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});