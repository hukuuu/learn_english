angular.module('home',['add','list','search'])
	.controller('HomeCtrl',['$scope',function($scope){
		console.log('home controller is working',$scope);
	}]);
