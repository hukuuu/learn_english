angular.module('services')
	.factory('HintService',[function(){

		var state = localStorage.getItem('learnenglish:hintstate');
		state = state ? JSON.parse(state) : {};

		function saveState (){
			localStorage.setItem('learnenglish:hintstate',JSON.stringify(state));
		}

		function hint(word){
			var l = word.length;
			var result = [];
			var perc = state.perc || 40;
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
