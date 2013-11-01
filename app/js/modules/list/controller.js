angular.module('list',[])
	.controller('ListCtrl',['$scope','WordService','$rootScope',function($scope,wordService,$rootScope){

		var lastConfig;

		$rootScope.$on('search',function(event,config){
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

	}]);
