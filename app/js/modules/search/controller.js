angular.module('search',[])
	.controller('SearchCtrl',['$scope', '$timeout','$rootScope', function($scope, $timeout, $rootScope){
		console.log('search controller is working');
		var timeoutPromise;
		$scope.onKeyUp = function(){
			if(timeoutPromise){
				$timeout.cancel(timeoutPromise)
			}
			timeoutPromise = $timeout(function(){
				$rootScope.$emit('search',$scope.searchTerm);
				console.log('should search for: ',$scope.searchTerm);
			},450);

		}
	}]);
