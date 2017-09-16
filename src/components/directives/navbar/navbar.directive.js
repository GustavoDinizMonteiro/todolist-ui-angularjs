(function () {
  'use strict';

  angular.module('todolistApp')
    .directive('navbar', ['$state', '$window', '$rootScope',
      function ($state, $window, $rootScope) {
        return {
          templateUrl: 'src/components/directives/navbar/navbar.html',
          link: function (scope, element, attrs) {
            scope.user = $rootScope.user;

            scope.logout = function () {
              delete $window.localStorage.userId;
              delete $window.localStorage.token;
              $state.go('login');
            };
          }
        };
      }
    ]);
})();