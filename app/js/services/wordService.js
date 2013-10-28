angular.module('services',[])
	.factory('WordService', ['$http',function($http){
		function add(word) {
			console.log('add word',word);
			$http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}


		return {
			add : add
		}
	}]);
