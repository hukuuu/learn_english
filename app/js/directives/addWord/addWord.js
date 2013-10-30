angular.module('directives')
  .directive('addWord', function() {
	  console.log('making addword directive');
    return {
      restrict: 'E',
      scope: {
	onAdd: '='
      },
      templateUrl: 'js/directives/addWord/addword.html',
	link: function(scope, element, attrs){
		var counter = 2;
		clear();
		scope.toggleFormShow = function(){
			scope.showForm = !scope.showForm;
		}
		scope.onOk = function(){
			var word = {
				type: scope.word.type,
  				englishValue: scope.word.englishValue,
  				bulgarianValues: scope.word.bulgarianValues.map(function(def){return def.value})
			}
			scope.onAdd(word);
			scope.onCancel();
		}
		scope.onCancel = function(){
			scope.showForm = !scope.showForm;
			clear();
		}
		
		scope.addDefinition = function() {
			scope.word.bulgarianValues.push({index:counter++,value:''});
		}
		scope.removeDefinition = function(index){
			console.log(index);
			scope.word.bulgarianValues.splice(index,1);
		}

		function clear() {
			scope.word = {
				bulgarianValues: [{index:1,value:''}]
			}
		}
	}
    };
  });
