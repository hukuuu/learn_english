angular.module('services')
	.factory('localStorage',[function(){


		function getBrowserLocalStorage(localStorage) {
			var ls= {};
			ls.get = function(key, callback) {
				console.log('dfs');
				callback(localStorage.getItem(key));
			};
			ls.set = function(keyval) {
				console.log('dfs');
				for(var key in keyval) {
					localStorage.setItem(key,keyval[key]);
				}
			}
			return ls;
		}


		var ls;
		try {
			ls = getBrowserLocalStorage(window.localStorage);
		} catch (e) {
			console.log('local storage fallback to chrome storage');
			ls = chrome.storage.local;
		}

		return ls;
	}]);
