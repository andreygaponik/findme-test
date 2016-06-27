'use strict';

var RouterConfiguration = function($routeProvider) {
	$routeProvider
		.when('/register', {
			templateUrl: 'app/views/register.tpl.html',
			controller: 'RegCtrl'
		})
		.when('/signin', {
			templateUrl: 'app/views/signin.tpl.html',
			controller: 'SignCtrl'
		})
		.when('/home', {
			templateUrl: 'app/views/home.tpl.html',
			controller: 'HomeCtrl'
		})
		.when('/settings', {
			templateUrl: 'app/views/settings.tpl.html',
			controller: 'SettingsCtrl'
		})
		.otherwise({
        redirectTo: '/signin'
    });
};

RouterConfiguration.$inject = ['$routeProvider'];
app.config(RouterConfiguration);