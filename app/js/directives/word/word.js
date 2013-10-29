angular.module('directives')
  .directive('word', function() {
	  console.log('making word directive');
    return {
      restrict: 'E',
      scope: {
      },
      template: '<div>word directive</div>',
	link: function(scope, element, attrs){
		console.log('word directive link function');
	}
    };
  });
