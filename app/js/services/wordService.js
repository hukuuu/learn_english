angular.module('services')
	.factory('WordService', ['$http','localStorage',function($http,localStorage){
		console.log(localStorage);

		var defaultWordsPerPage = 12;

		var state = {};
		localStorage.get('wordsstate',function(st){
			state = st;
			state = state ? JSON.parse(state) : {};
			state.wordsPerPage = state.wordsPerPage || defaultWordsPerPage;
			console.log('33');
		});

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
		function saveState(){ localStorage.set({'wordsstate':JSON.stringify(state)}); };
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
