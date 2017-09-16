angular.module('todolistApp', ['ui.router', 'ui.router.stateHelper']);

// Routes
require('./config/routes.config.js');

// Constants
require('./config/constants.js');

// Theme
require('./theme/theme.scss');

// Controllers
require('./components/login/login.controller.js');
require('./components/signup/signup.controller.js');
require('./components/dashboard/dashboard.controller.js');

// Services
require('./components/services/authentication.service.js');
require('./components/services/user.service.js');
require('./components/services/task.service.js');

// Directives
require('./components/directives/navbar/navbar.directive.js');