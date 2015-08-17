angular.module('services')
	.factory('HintService',['localStorage',function(localStorage){
		var defaultPerc = 40;

		var state = {};
		localStorage.get('learnenglish:hintstate',function(st){
			state = st;
			try {
				state = state ? JSON.parse(state) : {};
			} catch (e) {
			}
			state.perc = state.perc || 40;
			console.log('adf');
		});

		function saveState (){
			localStorage.set({'learnenglish:hintstate':JSON.stringify(state)});
		}

		function hint(word){
			var l = word.length;
			var result = [];
			var perc = state.perc;
			var visible = Math.ceil((word.length * perc/100) / 2);
			Array.prototype.forEach.call(word,function(char,index){
				var c;
				if( (index < visible) || ((l - index) <= visible) ) {
					c = char;
				} else {
					c = '_';
				}
				result.push(c);
			});
			return result.join('');
		};
		function setPercentage(val) {
			state.perc = val;
			saveState();
		};
		function getPercentage() {
			return state.perc;
		}

		return {
		
			hint: hint,
			setPercentage: setPercentage,
			getPercentage: getPercentage
		
		}
	
	
	}]);
