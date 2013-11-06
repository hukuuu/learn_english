angular.module('services')
	.factory('UtilsService', ['$http',function($http){
		function diffFields(src,target){
		    var temp = {};
		    for(prop in target){
		        if(src[prop]!=target[prop]){
		            temp[prop]=target[prop];
		        }
		    }
		    return temp;
		}

		return {
			diffFields: diffFields
		}
	}]);