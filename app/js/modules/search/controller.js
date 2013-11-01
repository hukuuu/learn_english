angular.module('search',[])
	.controller('SearchCtrl',['$scope', '$timeout','$rootScope','TagService', function($scope, $timeout, $rootScope, tagService){
		var timeoutPromise;

		tagService.list().then(function(payload){
				$scope.tags = payload.data
			});

		$scope.selectedTags = [];

		$scope.addTag = function(){
			if($scope.selectedTags.indexOf($scope.selectedTag) === -1) {
				$scope.selectedTags.push($scope.selectedTag);
			}
			$scope.selectedTag = '';
			search();
		}
		$scope.removeTag = function(tag) {
			var index = $scope.selectedTags.indexOf(tag);
			$scope.selectedTags.splice(index,1);
			search();
		}
		$scope.onKeyUp = function(){
			if(timeoutPromise){
				$timeout.cancel(timeoutPromise)
			}
			timeoutPromise = $timeout(function(){
				//$rootScope.$emit('search',$scope.searchTerm);
				search();
			},450);

		}

		function search () {
			$rootScope.$emit('search', {
				filter : $scope.searchTerm,
				tags : $scope.selectedTags
			});
		}
	}]);
