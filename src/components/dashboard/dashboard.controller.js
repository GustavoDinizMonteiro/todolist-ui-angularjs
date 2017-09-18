(function () {
  'use strict';
  /**
   * User actions controller, how to create and delete 
   * tasks, assign tags and mark tasks as done.
   * @module DashboardController
   */
  angular.module('todolistApp')
    .controller('DashboardController', ['$scope', 'UserService', 'TaskService', 'TagService',
      function ($scope, UserService, TaskService, TagService) {
        $scope.user = {};

        $scope.taskModalActive = false;
        $scope.tagModalActive = false;
        
        $scope.newTask = { finished: false };
        $scope.newTag = {};
        $scope.newRelation = {};

        /**
         * Get user data when the module is instantiated.
         * @method main
         */
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
          var relations = $scope.user.relations.filter(function (r) { return r.task_id === taskId; });
          var relarionsId = relations.map(function (r) { return r.tag_id; });
          return $scope.user.tags.filter(function (tag) { return relarionsId.includes(tag.id); });
        };

        /**
         * Create a new tag with the name passed in the modal of creating tasgs.
         * @method createTag
         */
        $scope.createTag = function () {
          if ($scope.newTag.name) {
            TagService.createTag($scope.newTag, function (data) {
              if (data) {
                $scope.newRelation.tag_id = data.id;
                TagService.createRelation($scope.newRelation, function (success) {
                  if (success) {
                    $scope.user.tags.push(data);
                    $scope.user.relations.push(success);

                    $scope.newTag = {};
                    $scope.newRelation = {};

                    $scope.tagModalActive = false;
                  }
                });
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
          $scope.newRelation.task_id = taskId;
        };

        /**
         * Close the tag creation modal.
         * @method closeTagModal
         */
        $scope.closeTagModal = function () {
          $scope.tagModalActive = false;
        };

        /**
         * Add a tag already exists to a task.
         * @param {number} tagId - Id of tag.
         * @method addTag
         */
        $scope.addTag = function (tagId) {
          $scope.newRelation.tag_id = tagId;
          TagService.createRelation($scope.newRelation, function (data) {
            if (data) {
              $scope.user.relations.push(data);
              $scope.newRelation = {};
              $scope.tagModalActive = false;
            }
          });
        };

        /**
         * Mark a task as done.
         * @param {object} task - Task que será marcada como finalizada.
         * @method markAsDone
         */
        $scope.markAsDone = function (task) {
          if (!task.finished) {
            task.finished = true;
            TaskService.patchTask(task, function (success) {
              if (!success) {
                task.finished = false;
              }
            });
          }
        };
      }
    ]);
})();