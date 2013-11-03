angular.module('home',['add','list','search','hotkeys'])
	.controller('HomeCtrl',['$scope',function($scope){
		console.log('home controller is working',$scope);
	}]);
