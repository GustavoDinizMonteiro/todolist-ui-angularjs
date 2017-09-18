angular.module('todolistApp')

  .constant("HTTP_CONSTANTS", {
    // DEV
    //"API": "http://localhost:3000",

    // PROD
    "API": "https://simple-todolist-api.herokuapp.com"
  })

  .constant("MESSAGES", {
    "LOGIN_SUCCESS": "User was successfully authenticated.",
    "FETCH_USER_SUCCESS": "Fetching data was successfully.",
    "CREATE_USER_SUCCESS": "User was successfully created.",
    "LOGIN_FAIL": "Incorrect email or password.",
    "CREATE_TASK_SUCCESS": "A new task was successfully created.",
    "DELETE_TASK_SUCCESS": "Task was successfully deleted.",    
    "UPDATE_TASK_SUCCESS": "Task was successfully updated.",
    "CREATE_TAG_SUCCESS": "Task was successfully created.",
    "DELETE_TAG_SUCCESS": "Tag was successfully deleted.",
    "CREATE_RELATION_SUCCESS": "Successfully created a new relation between a task and a tag."
  })

  .constant("API_ENDPOINTS", {
    "LOGIN": "/authenticate",
    "USER": "/users/",
    "TASK": "/tasks/",
    "TAG": "/tags/",
    "TASK_TAG": "/tasks_tags"
  })
  
  .constant("HTTP_CODES", {
    "UNAUTHORIZED": 401
  });