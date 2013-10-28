angular.module('add',[])
	.controller('AddCtrl',['$scope','WordService',function($scope,wordService){
		console.log('add controller is working',$scope);
		$scope.addWord = function(word){
			console.log(word);
			wordService.add(word);
		}
	}]);
