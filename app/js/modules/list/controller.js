angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService',function($scope,wordService){
		console.log('list controller working....',wordService);
		wordService.list()
			.then(function(payload){
				$scope.words = payload.data
			});
	}]);
