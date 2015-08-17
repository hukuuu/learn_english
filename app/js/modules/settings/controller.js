angular.module('settings',[])
	.controller('SettingsCtrl',['$scope', 'HintService', 'WordService', 'NotificationService', function($scope, hintService, wordService, notificationService){
		console.log('settings ctrl');
		$scope.hintPercentage = hintService.getPercentage();
		$scope.wordsPerPage =  wordService.getWordsPerPage();
		$scope.save = function(){
			hintService.setPercentage($scope.hintPercentage);
			wordService.setWordsPerPage($scope.wordsPerPage);
			notificationService.success("Settings saved.");
		}
	}]);
