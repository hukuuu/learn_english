angular.module('directives')
  .directive('word', ['$timeout',function($timeout) {
	  var ENTER_KEYCODE = 13;
    return {
      restrict: 'E',

      scope: {
	      word: '='
      },
	replace:true,
      templateUrl: 'js/directives/word/word.html',
	link: function(scope, element, attrs){
		var input = element.find('input');
		scope.placeholder = scope.word.englishValue + ' \u21B5 or <tab>';
		scope.guess="";
		scope.openClosedState = "word-close";

		scope.toggle = function(){
			scope.openClosedState = (scope.openClosedState === "word-close") ? "word-open" : "word-close";
		};
		scope.keyPressed = function(event) {
			if(event.keyCode === ENTER_KEYCODE) {
				input[0].blur();
			}
		}

		function compute() {
			if (scope.word.bulgarianValues.indexOf(scope.guess.trim())>-1) {
				scope.successFailState = "word-success";

			} else {
				scope.successFailState = "word-error";
			}
		}


		scope.select = function(){
			scope.toggle();
			$timeout(function(){
				input[0].focus();
			});
		}

		input.bind('focusin',function(event){
			$timeout(function(){
				scope.openClosedState = "word-open";
			});
		});
		input.bind('focusout',function(event){
			$timeout(function(){
				compute();
				scope.openClosedState = "word-close";
			});
		});

	}
    };
  }]);
