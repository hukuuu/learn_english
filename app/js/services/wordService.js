angular.module('services')
	.factory('WordService', ['$http',function($http){
		function add(word) {
			$http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}

		function list (config) {

			var params = {
				size:12
			}
			if(config) {
				params.filter = config.filter;
				params.tags = config.tags.join(',');
			}

			return $http.get('http://learnenglishonline.herokuapp.com/words.json',{params:params});
		}


		return {
			add : add,
			list: list
		}
	}]);
