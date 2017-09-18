(function () {
  'use strict';
  /**
   * Tag data service.
   * @module TagService
   */
  angular.module('todolistApp')
    .factory('TagService', ['$http', '$window', 'HTTP_CONSTANTS',
      'API_ENDPOINTS', 'MESSAGES', Service]);

  function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES) {
    var service = {
      createTag: createTag,
      deleteTag: deleteTag,
      createRelation: createRelation
    };

    return service;

    /**
     * Create a tag for the user whose id is saved in the local memory.
     * @param {object} tag - Tag data with name of tag.
     * @param {function} callback - callback function.
     * @method createTag
     */
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

    /**
     * Delete a tag by id passed.
     * @param {number} tagId - Id of tag.
     * @param {function} callback - Callback function.
     * @method deleteTag 
     */
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

    /**
     * Create a relation between a task and a tag.
     * @param {object} relation - Data of relation including IDs of task and tags.
     * @param {function} callback - Callback function.
     * @method createRelation
     */
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