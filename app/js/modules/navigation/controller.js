angular.module('navigation',[])
	.controller('NavigationCtrl',['$scope', '$location',function($scope, $location){

		$scope.isActive = function (path){
			console.group();
			console.log(path);
			console.log($location.path())
			console.log($location.path() == path)
			console.groupEnd();
			return path == $location.path();
		}
	}])