(function(){
	'use strict';
	angular.module('data')
	.component('items', {
		templateUrl:'templates/itemslist.html',
		bindings:{
			item: '<',
		}		
	});

	
})();