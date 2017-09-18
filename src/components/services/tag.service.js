(function () {
  'use strict';

  angular.module('todolistApp')
    .factory('TagService', ['$http', '$window', 'HTTP_CONSTANTS',
      'API_ENDPOINTS', 'MESSAGES', Service]);

  function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES) {
    var service = {};
    service.createTag = createTag;
    service.deleteTag = deleteTag;
    service.createRelation = createRelation;

    return service;

    function createTag(tag, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TAG;

      tag.user_id = $window.localStorage.userId;
      $http.post(url, tag).then(success, err);

      function success(response) {
        console.log(MESSAGES.CREATE_TAG_SUCCESS);
        callback(response.data);
      }

      function err(err) {
        callback(false);
      }

    }

    function deleteTag(tagId, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TAG + tagId;

      $http.delete(url).then(success, err);

      function success(response) {
        console.log(MESSAGES.DELETE_TASK_SUCCESS);
        callback(true);
      }

      function err(err) {
        callback(false);
      }

    }

    function createRelation(relation, callback) {
      var url = HTTP_CONSTANTS.API + API_ENDPOINTS.TASK_TAG;
      
      relation.user_id = $window.localStorage.userId;
      $http.post(url, relation).then(success, err);

      function success(response) {
        console.log(MESSAGES.CREATE_RELATION_SUCCESS);
        callback(response.data);
      }

      function err(err) {
        callback(false);
      }

    }

  }
})();