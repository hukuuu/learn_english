angular.module('settings',[])
	.controller('SettingsCtrl',['$scope', 'HintService', 'WordService', function($scope, hintService, wordService){
		console.log('settings ctrl');
		$scope.hintPercentage = hintService.getPercentage();
		$scope.wordsPerPage =  wordService.getWordsPerPage();
		$scope.save = function(){
			console.log('adsf');
			hintService.setPercentage($scope.hintPercentage);
			wordService.setWordsPerPage($scope.wordsPerPage);
		}
	}]);
