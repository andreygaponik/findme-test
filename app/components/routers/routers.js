'use strict';

var RouterConfiguration = function($routeProvider) {
	$routeProvider
		.when('/register', {
			templateUrl: 'app/views/register.tpl.html',
			controller: 'RegCtrl'
		})
		.when('/home', {
			templateUrl: 'app/views/home.tpl.html',
			controller: 'HomeCtrl'
		})
};

RouterConfiguration.$inject = ['$routeProvider'];
app.config(RouterConfiguration);