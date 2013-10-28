'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'services',
  'directives',
  'home',
  'add'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'js/modules/home/view.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
