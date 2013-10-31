angular.module('add',['ui.bootstrap'])
	.controller('AddCtrl',['$scope','WordService',function($scope,wordService){
		console.log('add controller is working',$scope);
		$scope.word = {};
		
		
		$scope.word = {
			bulgarianValues: [{index:1,value:''}],
			states : ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
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
