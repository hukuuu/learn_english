angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService','$rootScope',function($scope,wordService,$rootScope){
		console.log('list controller working....',wordService);

		var lastTerm;

		$rootScope.$on('search',function(event,term){
			search(term);
		});
		$rootScope.$emit('search','');

		$scope.refresh = function(){
			search(lastTerm);
		}


		function search(term){
			console.log('list controller shoulda search...',term);
			lastTerm = term;
			wordService.list(term)
			.then(function(payload){
				$scope.words = payload.data
			});
		}

	}]);
