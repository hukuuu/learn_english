angular.module('services')
	.factory('TagService', ['$http',function($http){
		function list () {
			console.log('in tag service');
			return ["Alaska","Los Angeles","San Diego"];
			//return $http.get('http://learnenglishonline.herokuapp.com/words.json',{params:params});
		}
		return {
			list: list
		}
	}]);
