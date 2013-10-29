angular.module('services',[])
	.factory('WordService', ['$http',function($http){
		function add(word) {
			console.log('add word',word);
			$http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}

		function list () {
			console.log('listing words');
			return $http.get('http://learnenglishonline.herokuapp.com/words.json');
		}


		return {
			add : add,
			list: list
		}
	}]);
