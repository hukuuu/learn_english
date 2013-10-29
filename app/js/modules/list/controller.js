angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService','$rootScope',function($scope,wordService,$rootScope){
		console.log('list controller working....',wordService);
		$rootScope.$on('search',function(event,term){
			console.log('list controller shoulda search...',term);
			wordService.list(term)
			.then(function(payload){
				$scope.words = payload.data
			});

		});
		$rootScope.$emit('search','');

	}]);
