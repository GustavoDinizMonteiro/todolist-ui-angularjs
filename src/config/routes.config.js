angular.module("todolistApp").config(function(stateHelperProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  stateHelperProvider
    .state({
      name: 'login',
      url: '/',
      templateUrl: 'src/components/login/login.html',
      controller: 'LoginController'
    })
    
    .state({
      name: 'signup',
      url: '/singup',
      templateUrl: 'src/components/signup/signup.html',
      controller: 'SignUpController'
    });
});