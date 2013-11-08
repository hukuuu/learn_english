angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService','$rootScope','HintService', '$timeout',function($scope,wordService,$rootScope, hintService, $timeout){

		var lastConfig;

		$rootScope.$on('search',function(event,config){
			search(config);
		});
		$rootScope.$emit('search');

		$scope.refresh = function(){
			console.log("refresh",lastConfig);
			search(lastConfig);
		}


		function search(config){
			lastConfig = config
			wordService.list(config)
			.then(function(payload){
				$timeout(function () {
					$scope.$apply(function(){
						$scope.words = payload.data;	
						console.log("asdf");
					});

				});
				
			});
		}
		$scope.hint = function(word){
			return hintService.hint(word.bulgarianValues[0]);
		}

	}]);
