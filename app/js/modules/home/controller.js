angular.module('home',['add','list'])
	.controller('HomeCtrl',['$scope',function($scope){
		console.log('home controller is working',$scope);
	}]);
