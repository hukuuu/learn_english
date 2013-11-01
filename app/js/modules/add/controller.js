angular.module('add',['ui.bootstrap'])
	.controller('AddCtrl',['$scope','WordService','TagService',function($scope,wordService,tagService){
		console.log('add controller is working',$scope);
		$scope.word = {};
		
		
		$scope.word = {
			bulgarianValues: [{index:1,value:''}],
			states : tagService.list(),
			tags:[]
		}
		$scope.onOk = function(){
			var word = {
				type: $scope.word.type,
  				englishValue: $scope.word.englishValue,
  				bulgarianValues: $scope.word.bulgarianValues.map(function(def){return def.value})
			}
			wordService.add(word);
		}
		$scope.addTag  = function () {
			console.log("add tag",$scope.word.selected);
			$scope.word.tags.push($scope.word.selected);
			$scope.word.selected='';
		}
		var counter = 2;
		$scope.addDefinition = function() {
			$scope.word.bulgarianValues.push({index:counter++,value:''});
		}
		$scope.removeDefinition = function(index){
			console.log(index);
			$scope.word.bulgarianValues.splice(index,1);
		}

	}]);
