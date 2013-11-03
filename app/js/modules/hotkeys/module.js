angular.module('hotkeys',[])
	.run(['$rootScope','KEY_MAPPINGS',function($rootScope,KEY_MAPPINGS ){
		//MOUSETRAP GLOBAL BINDINGS EXTENSION ( NO BOWER, SO I HARDCODED IT HERE )
		Mousetrap = (function(Mousetrap) {
		var _globalCallbacks = {},
			_originalStopCallback = Mousetrap.stopCallback;
		Mousetrap.stopCallback = function(e, element, combo, sequence) {
			if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
				return false;
			}
			return _originalStopCallback(e, element, combo);
		};
		Mousetrap.bindGlobal = function(keys, callback, action) {
			Mousetrap.bind(keys, callback, action);
			if (keys instanceof Array) {
				for (var i = 0; i < keys.length; i++) {
					_globalCallbacks[keys[i]] = true;
				}
				return;
			}
			_globalCallbacks[keys] = true;
		};
		return Mousetrap;
		}) (Mousetrap);
		//MOUSETRAP GLOBAL BINDINGS EXTENSION ( NO BOWER, SO I HARDCODED IT HERE )



		console.log('hotkeys module is working');
		console.log($rootScope);
		Mousetrap.bindGlobal(KEY_MAPPINGS.HINT.map,function(evt){
			window.evt = evt;
			$rootScope.$emit(KEY_MAPPINGS.HINT.name,evt);
		});
	}]);
