(function () {
  'use strict';
  /**
   * @module dashboard
   */
  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', 'UserService', 'TaskService', 'TagService',
      function ($scope, UserService, TaskService, TagService) {
        $scope.user = {};

        $scope.taskModalActive = false;
        $scope.tagModalActive = false;
        $scope.newTask = { finished: false };
        $scope.newTag = {};

        (function main() {
          UserService.getUser(function (data) {
            if (data) {
              $scope.user = data;
            }
          });
        })();

        /**
         * Open the task creation modal.
         * @method openTaskModal
         */
        $scope.openTaskModal = function () {
          $scope.taskModalActive = true;
        };

        /**
         * Close the task creation modal.
         * @method closeTaskModal
         */
        $scope.closeTaskModal = function () {
          $scope.taskModalActive = false;
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
              $scope.taskModalActive = false;
            }
          });
        };

        /**
         * Delete selected task by id.
         * @param {number} taskId - Id of selected task.
         * @method deleteTask
         */
        $scope.deleteTask = function (taskId) {
          TaskService.deleteTask(taskId, function (success) {
            if (success) {
              $scope.user.tasks = $scope.user.tasks.filter(function (task) { return task.id !== taskId; });
            }
          });
        };

        /**
         * Filter through tags related to a task by id.
         * @param {number} taskId - Id of task.
         * @method getTags
         * @returns {Array<Object>} Returns all tags related to the task id.
         */
        $scope.getTags = function (taskId) {
          return $scope.user.tags.filter(function (tag) { return tag.task_id === taskId; });
        };

        /**
         * Create a new tag with the name passed in the modal of creating tasgs.
         * @method createTag
         */
        $scope.createTag = function () {
          if ($scope.newTag.name) {
            TagService.createTag($scope.newTag, function (data) {
              if (data) {
                $scope.user.tags.push(data);
                $scope.newTag = {};
                $scope.tagModalActive = false;
              }
            });
          }
        };

        /**
         * Delete selected tag by id.
         * @param {number} tagId - Id of tag.
         * @method deleteTag
         */
        $scope.deleteTag = function (tagId) {
          TagService.deleteTag(tagId, function (success) {
            if (success) {
              $scope.user.tags = $scope.user.tags.filter(function (tag) { return tag.id !== tagId; });
            }
          });
        };

        /**
         * Open the tag creation modal.
         * @method openTagModal
         * @param {number} taskId - Id of task.
         */
        $scope.openTagModal = function (taskId) {
          $scope.tagModalActive = true;
          $scope.newTag.task_id = taskId;
        };

        /**
         * Close the tag creation modal.
         * @method closeTagModal
         */
        $scope.closeTagModal = function () {
          $scope.tagModalActive = false;
        };
      }
    ]);
})();