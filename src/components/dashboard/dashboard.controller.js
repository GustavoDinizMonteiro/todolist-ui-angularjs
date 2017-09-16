(function () {
  'use strict';

  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', 'UserService', 'TaskService',
      function ($scope, UserService, TaskService) {
        $scope.user = {};

        $scope.modalActive = false;
        $scope.newTask = { finished: false };

        (function main() {
          UserService.getUser(function (data) {
            if (data) {
              $scope.user = data;
            }
          });
        })();

        $scope.openModal = function () {
          $scope.modalActive = true;
        };

        $scope.closeModal = function () {
          $scope.modalActive = false;
        };

        $scope.createTask = function () {
          TaskService.createTask($scope.newTask, function (data) {
            if (data) {
              $scope.user.tasks.push(data);
              $scope.newTask = { finished: false };
              $scope.modalActive = false;
            }
          });
        };

        $scope.deleteTask = function (taskId) {
          TaskService.deleteTask(taskId, function (success) {
            if (success) {
              $scope.user.tasks = $scope.user.tasks.filter(function (task) { return task.id != taskId;});
            }
          });
        };
      }
    ]);
})();