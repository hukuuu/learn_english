angular.module('services')
	.factory('UtilsService', ['$http',function($http){
		function diffFields(src,target){
		    var temp = {};
		    for(prop in target){
		    	if(target[prop] instanceof Array && target[prop]!=undefined){
		    		if(src[prop] != undefined){
			    		if(!compareTwoArrays(src[prop].sort(),target[prop].sort())){
			    			temp[prop]=target[prop];
			    		}
		    		}
		    		continue;
		    	}
		        if(src[prop]!=target[prop]){
		            temp[prop]=target[prop];
		        }
		    }
		    return temp;
		}

		function isObjectEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }

		    return true;
		}

		function compareTwoArrays (src,target) {
			// if the other array is a falsy value, return
		    if (!src)
		        return false;

		    // compare lengths - can save a lot of time
		    if (src.length != target.length)
		        return false;

		    for (var i = 0; i < src.length; i++) {
		        // Check if we have nested arrays
		        if (src[i] instanceof Array && target[i] instanceof Array) {
		            // recurse into the nested arrays
		            if (!src[i].compare(target[i]))
		                return false;
		        }
		        else if (src[i] != target[i]) {
		            // Warning - two different object instances will never be equal: {x:20} != {x:20}
		            return false;
		        }
		    }
		    return true;
		}

		return {
			diffFields: diffFields,
			isObjectEmpty : isObjectEmpty
		}
	}]);