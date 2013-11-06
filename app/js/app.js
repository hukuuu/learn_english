'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'services',
  'directives',
  'home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/home', {templateUrl: 'js/modules/home/view.html'})
	.when('/add', {templateUrl: 'js/modules/add/view.html'})
	.when('/settings', {templateUrl: 'js/modules/settings/view.html'})
	.otherwise({redirectTo: '/home'});
}]);
