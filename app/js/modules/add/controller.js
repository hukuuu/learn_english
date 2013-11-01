angular.module('add',['ui.bootstrap'])
	.controller('AddCtrl',['$scope','WordService','TagService',function($scope,wordService,tagService){
		console.log('add controller is working',$scope);
		$scope.word = {};
		$scope.states = tagService.list();
		
		$scope.word = {
			bulgarianValues: [{index:1,value:''}],
			tags:[]
		}
		$scope.onOk = function(){
			var word = {
				type: $scope.word.type,
  				englishValue: $scope.word.englishValue,
  				bulgarianValues: $scope.word.bulgarianValues.map(function(def){return def.value}),
  				tags : $scope.word.tags
			}
			wordService.add(word);
		}
		$scope.addTag  = function () {
			console.log("add tag",$scope.word.selected);
			if($scope.word.tags.indexOf($scope.word.selected) == -1){
				$scope.word.tags.push($scope.word.selected);
			}
			$scope.word.selected='';
		}
		$scope.removeTag  = function (tag) {
			console.log(tag);
			//var tagText = event.target.attributes["data-tag"].nodeValue;
			var tagText = tag;
			console.log("removeTag",tagText);
			var indexOfText = $scope.word.tags.indexOf(tagText);
			$scope.word.tags.splice(indexOfText,1);
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
