(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController)
.directive('signupDirective',SignupDirective);

SignupController.$inject = ['MenuService','InfoFactory'];
function SignupController(MenuService,InfoFactory) {
  var $ctrl = this;
  $ctrl.checkMenuShortName = true;
  $ctrl.user = {};
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

SignupDirective.$inject = ['MenuService','InfoFactory','$q','ApiPath','$http','$timeout'];
function SignupDirective(MenuService,InfoFactory,$q,ApiPath,$http,$timeout){
	var ddo = {
		scope:'=',
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {
			 ngModel.$asyncValidators.checkMenuShortName = function(modelValue, viewValue) {
				var short_name = viewValue;
				var deferred = $q.defer();
			  
				// ask the server if this username exists
				$http.get(ApiPath + '/menu_items/'+short_name+'.json').then(
				  function(response) {
					// simulate a server response delay of half a second
					$timeout(function() {
					  if (response.data && response.data.exists) {
						deferred.reject();
					  } else {
						deferred.resolve();						
					  }
					}, 500);
				  });
				// return the promise of the asynchronous validator
				return deferred.promise;
			  }						
		}
	}
	return ddo;
}


})();
