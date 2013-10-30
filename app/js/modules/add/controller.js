angular.module('add',[])
	.controller('AddCtrl',['$scope','WordService',function($scope,wordService){
		console.log('add controller is working',$scope);
		$scope.word = {};
		$scope.word = {
			bulgarianValues: [{index:1,value:''}]
		}
		$scope.onOk = function(){
			var word = {
				type: $scope.word.type,
  				englishValue: $scope.word.englishValue,
  				bulgarianValues: $scope.word.bulgarianValues.map(function(def){return def.value})
			}
			wordService.add(word);
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
