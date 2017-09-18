(function () {
  'use strict';

  angular.module('todolistApp')
    .factory('TaskService', ['$http', '$window', 'HTTP_CONSTANTS',
      'API_ENDPOINTS', 'MESSAGES', Service]);

  function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES) {
    var service = {
      createTask: createTask,
      deleteTask: deleteTask,
      patchTask: patchTask
    };

    return service;

    function createTask(task, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TASK;

      task.user_id = $window.localStorage.userId;
      $http.post(url, task).then(success, err);

      function success(response) {
        console.log(MESSAGES.CREATE_TASK_SUCCESS);
        callback(response.data);
      }

      function err(err) {
        callback(false);
      }

    }

    function deleteTask(taskId, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TASK + taskId;

      $http.delete(url).then(success, err);

      function success(response) {
        console.log(MESSAGES.DELETE_TAG_SUCCESS);
        callback(true);
      }

      function err(err) {
        callback(false);
      }

    }

    function patchTask(task, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TASK + task.id;

      $http.patch(url, task).then(success, err);

      function success(response) {
        console.log(MESSAGES.UPDATE_TASK_SUCCESS);
        callback(true);
      }

      function err(err) {
        callback(false);
      }

    }

  }
})();
