angular.module('services',[])
	.factory('WordService', ['$http',function($http){
		function add(word) {
			console.log('add word',word);
			$http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}

		function list (term) {
			console.log('listing words',term);
			if (term) {
				return $http.get('http://learnenglishonline.herokuapp.com/words.json',{params:{filter:term}});
			}
			return $http.get('http://learnenglishonline.herokuapp.com/words.json');
		}


		return {
			add : add,
			list: list
		}
	}]);
