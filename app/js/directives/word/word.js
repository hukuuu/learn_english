angular.module('directives')
  .directive('word', function() {
	  var ENTER_KEYCODE = 13;
	  console.log('making word directive');
    return {
      restrict: 'E',

      scope: {
	      word: '='
      },
	replace:true,
      templateUrl: 'js/directives/word/word.html',
	link: function(scope, element, attrs){
		scope.placeholder = 'guess \u21B5';
		scope.guess="";
		scope.openClosedState = "word-close";
		scope.toggle = function(){
			scope.openClosedState = (scope.openClosedState === "word-close") ? "word-open" : "word-close";
		};
		scope.keyPressed = function(event) {
			if(event.keyCode === ENTER_KEYCODE) {
				if (scope.word.bulgarianValues.indexOf(scope.guess.trim())>-1) {
					scope.successFailState = "word-success";

				} else {
					scope.successFailState = "word-error";
				}
			}
		}
	}
    };
  });
