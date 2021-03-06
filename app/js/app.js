'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'services',
  'directives',
  'home',
  'navigation',
  'settings',
  'about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/home', {templateUrl: 'js/modules/home/view.html'})
	.when('/add', {templateUrl: 'js/modules/add/view.html'})
	.when('/settings', {templateUrl: 'js/modules/settings/view.html'})
  .when('/about', {templateUrl: 'js/modules/about/view.html'})
	.otherwise({redirectTo: '/home'});
}]);
