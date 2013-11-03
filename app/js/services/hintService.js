angular.module('services')
	.factory('HintService',[function(){

		var SHOW_PERC = 40;

		function hint(word){
			var l = word.length;
			var result = [];
			var visible = Math.ceil((word.length * 40/100) / 2);
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

		return {
		
			hint: hint
		
		}
	
	
	}]);
