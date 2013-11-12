angular.module('services')
	.factory('NotificationService',[function(){
	
		//TODO any toaster config should go here :)

		return {
			success: function(val){
				toastr.success(val);
			}
		};
	}]);
