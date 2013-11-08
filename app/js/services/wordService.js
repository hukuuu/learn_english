angular.module('services')
	.factory('WordService', ['$http',function($http){
		function add(word) {
			$http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}
		function update(obj,id) {
			$http.put('http://learnenglishonline.herokuapp.com/words/' + id + ".json", obj );	
		}
		function list (config) {

			var params = {
				size:12
			}
			if(config!=undefined && config.tags != undefined ) {
				params.tags = config.tags.join(',') ;
			}
			if(config!=undefined && config.filter!=undefined ){
				params.filter = config.filter;
			}
			return $http.get('http://learnenglishonline.herokuapp.com/words.json',{params:params});
		}
		return {
			add : add,
			list: list,
			update : update
		}
	}]);
