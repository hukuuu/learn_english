angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService','$rootScope','HintService',function($scope,wordService,$rootScope, hintService){

		var lastConfig;

		$rootScope.$on('search',function(event,config){
			console.log("searcing");
			search(config);
		});
		$rootScope.$emit('search');

		$scope.refresh = function(){
			search(lastConfig);
		}


		function search(config){
			lastConfig = config
			wordService.list(config)
			.then(function(payload){
				$scope.words = payload.data
			});
		}
		$scope.hint = function(word){
			return hintService.hint(word.bulgarianValues[0]);
		}

	}]);
