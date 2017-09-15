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
    "LOGIN_FAIL": "Incorrect email or password."
  })

  .constant("API_ENDPOINTS", {
    "LOGIN": "/authenticate",
    "USER": "/users/"
  })
  
  .constant("HTTP_CODES", {
    "UNAUTHORIZED": 401
  });