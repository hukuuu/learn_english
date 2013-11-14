angular.module('services')
	.factory('WordService', ['$http',function($http){

		var defaultWordsPerPage = 12;

		var state = localStorage.getItem('learnenglish:wordsstate');
		state = state ? JSON.parse(state) : {};
		state.wordsPerPage = state.wordsPerPage || defaultWordsPerPage;

		function add(word) {
			return $http.post('http://learnenglishonline.herokuapp.com/words.json', word);
		}
		function update(obj,id) {
			return $http.put('http://learnenglishonline.herokuapp.com/words/' + id + ".json", obj );	
		}
		function list (config) {

			var params = {
				size: state.wordsPerPage
			}
			if(config!=undefined && config.tags != undefined ) {
				params.tags = config.tags.join(',') ;
			}
			if(config!=undefined && config.filter!=undefined ){
				params.filter = config.filter;
			}
			return $http.get('http://learnenglishonline.herokuapp.com/words.json',{params:params});
		}
		function saveState(){ localStorage.setItem('learnenglish:wordsstate',JSON.stringify(state)); };
		function getWordsPerPage () { return state.wordsPerPage; };
		function setWordsPerPage (val) { state.wordsPerPage = val; saveState(); };
		return {
			add : add,
			list: list,
			update : update,
			getWordsPerPage: getWordsPerPage,
			setWordsPerPage: setWordsPerPage

		}
	}]);
