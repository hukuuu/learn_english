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
		scope.success = false;
		scope.fail = false;
		scope.toggle = function(){
			scope.isOpen = !scope.isOpen;
		};
		scope.keyPressed = function(event) {
			if(event.keyCode === ENTER_KEYCODE) {
				if (scope.word.bulgarianValues.indexOf(scope.guess.trim())>-1) {
					console.log('pozna');
					scope.success = true;
					scope.fail = false;

				} else {
					console.log('ne pozna');
					scope.success = false;
					scope.fail = true;
				}
			}
		}
	}
    };
  });
