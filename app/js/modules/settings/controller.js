angular.module('settings',[])
	.controller('SettingsCtrl',['$scope', 'HintService', function($scope, hintService){
		console.log('settings ctrl');
		$scope.hintPercentage = hintService.getPercentage();
		$scope.save = function(){
			console.log('adsf');
			hintService.setPercentage($scope.hintPercentage);
		}
	}]);
