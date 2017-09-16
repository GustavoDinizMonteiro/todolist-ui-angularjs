(function () {
  'use strict';
  /**
   * @module dashboard
   */
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

        /**
         * @description Open the task creation modal.
         * @method openModal
         */
        $scope.openModal = function () {
          $scope.modalActive = true;
        };

        /**
         * Close the task creation modal.
         * @method closeModal
         */
        $scope.closeModal = function () {
          $scope.modalActive = false;
        };

        /**
         * Create a new task with the data passed in the modal of creating tasks.
         * @method createTask
         */
        $scope.createTask = function () {
          TaskService.createTask($scope.newTask, function (data) {
            if (data) {
              $scope.user.tasks.push(data);
              $scope.newTask = { finished: false };
              $scope.modalActive = false;
            }
          });
        };

        /**
         * Delete selected task by task id.
         * @param {number} taskId - Id of selected task.
         * @method deleTask
         */
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