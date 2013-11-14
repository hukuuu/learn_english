angular.module('directives')
    .directive('bootstrapSlider', ['$timeout',
        function($timeout) {
            console.log('working')
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attrs) {
                    var el = $(element);
                    var value = el.val();
                    var params = scope.$eval(attrs.bootstrapSlider);
                    params.value = parseInt(value);
                    params.tooltip = 'hide';
                    el.slider(params)
                        .on('slide', function(evt) {
                            $timeout(function() {
                                el.trigger('input');
                            }, 150);
                        });
                }
            };
        }
    ]);