angular.module('todolistApp')

  .constant("HTTP_CONSTANTS", {
    // DEV
    "API": "http://localhost:3000"

    // PROD
  })

  .constant("MESSAGES", {
    "LOGIN_SUCCESS": "User was successfully authenticated.",
    "FETCH_USER_SUCCESS": "Fetching data was successfully.",
    "CREATE_USER_SUCCESS": "User was successfully created.",
    "LOGIN_FAIL": "Incorrect email or password.",
    "CREATE_TASK_SUCCESS": "A new task was successfully created.",
    "DELETE_TASK_SUCCESS": "Task was successfully deleted."    
  })

  .constant("API_ENDPOINTS", {
    "LOGIN": "/authenticate",
    "USER": "/users/",
    "TASK": "/tasks/"
  })
  
  .constant("HTTP_CODES", {
    "UNAUTHORIZED": 401
  });