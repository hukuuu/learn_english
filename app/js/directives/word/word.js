angular.module('directives')
  .directive('word', function() {
	  console.log('making word directive');
    return {
      restrict: 'E',

      scope: {
	      word: '='
      },
      templateUrl: 'js/directives/word/word.html',
	link: function(scope, element, attrs){
		console.log('word directive link function');
	}
    };
  });
