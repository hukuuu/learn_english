angular.module('add',['ui.bootstrap'])
	.controller('AddCtrl',['$scope','WordService','TagService','$timeout','$rootScope','UtilsService', 'NotificationService',function($scope,wordService,tagService,$timeout,$rootScope,utilsService, notificationService){
		console.log('add controller is working',$scope);
		var timeoutPromise;
		$scope.word = {};
		$scope.states = tagService.list().then(function(payload){
			$scope.states = payload.data
		});
		$scope.isWordFound = false;
		$scope.originalWord = {};
		$scope.targetWord = {};
		$scope.word = {
			bulgarianValues: [{index:1,value:''}],
			tags:[]
		}
		$scope.onOk = function(){
			var promise,
				message;
			var word = {
				type: $scope.word.type,
  				englishValue: $scope.word.englishValue,
  				bulgarianValues: $scope.word.bulgarianValues.map(function(def){return def.value}),
  				tags : $scope.word.tags
			}
			var wordForUpdate = utilsService.diffFields($scope.originalWord,word);
			console.log('wordForUpdate',wordForUpdate);
			if(!$scope.isWordFound){
				console.log("add",JSON.stringify(word));
				promise = wordService.add(word);
				message = 'word added!';
			}else{
				console.log("update",JSON.stringify(wordForUpdate));
				promise = wordService.update(wordForUpdate,$scope.originalWord.id);
				message = 'word updated!';
			}

			promise.then(function(res){
				if(res.status < 400) { //TODO find better way
					notificationService.success(message);
				}
			});
			
			
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
		function isExactWordFound (payload) {
			var word = null;
			for (var i = 0; i < payload.data.length; i++) {
						//looking for exact match !!!!
						if(payload.data[i].englishValue==$scope.word.englishValue){
							word=payload.data[i];
							break;
						}
					};
				return word;
		}
		function clearForm(){
			$scope.word.bulgarianValues=[];
			$scope.word.tags=[];
		}
		function search () {
			console.log("raising event with param: ", $scope.word.englishValue);
			
			wordService.list({filter: $scope.word.englishValue}).then(function (payload) {
				console.log("finished loading",payload);
				if(payload!=undefined && payload.data!=undefined && payload.data.length > 0){
					var word = isExactWordFound(payload);
					if(word!=null){
						$scope.isWordFound =  true;
						$scope.originalWord = word;
					}else{
						$scope.isWordFound =  false;
					}
					clearForm();
					if($scope.isWordFound){
						for (var i = word.bulgarianValues.length - 1; i >= 0; i--) {
							$scope.word.bulgarianValues.push({value:word.bulgarianValues[i]});
						}
						if(word.tags!=undefined){
							for (var i = word.tags.length - 1; i >= 0; i--) {
								$scope.word.tags.push(word.tags[i]);
							}
						}
					}else{
						$scope.addDefinition();
					}
				}else{
					clearForm();
					$scope.addDefinition();
				}
			});
			
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
