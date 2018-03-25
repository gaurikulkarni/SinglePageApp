(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);
//.directive('signupDirective',SignupDirective);

SignupController.$inject = ['MenuService','InfoFactory'];
function SignupController(MenuService,InfoFactory) {
  var $ctrl = this;
  //console.log(menuItems.menu_items);
  $ctrl.checkMenuShortName = true;
  $ctrl.menu_item = null;
  $ctrl.submitForm = function () {
	var promise = MenuService.getMenuItem($ctrl.user.menu_shortname);
	promise.then(function(response){
		$ctrl.user.menu_item = response.data;
		//Got the file. Hence, short name exists.
		$ctrl.checkMenuShortName = true;
		//Save data in factory and set completed
		InfoFactory.add($ctrl.user);
		$ctrl.completed = true;
	})
	.catch(function(error){
		//Got an error. Short name does not exist
		$ctrl.checkMenuShortName = false;
		$ctrl.completed = false;		
	});
  };
};

/*SignupDirective.$inject = ['menuItems'];
function SignupDirective(){
	var ddo = {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attr, ngModel) {
			//Check if menu short name exists
			console.log(element.value);
			for(item in menuItems.menu_items){
				if(item["short_name"] == menu_shortname){
					return true;
				}
			}
			return false;		  
		}
	}
	return ddo;
}
*/

})();
