angular.module('todolistApp', ['ui.router', 'ui.router.stateHelper']);

// Routes
require('./config/routes.config.js');

// Theme
require('./theme/theme.scss');

// Controllers
require('./components/login/login.controller.js');
require('./components/signup/signup.controller.js');
require('./components/dashboard/dashboard.controller.js');
