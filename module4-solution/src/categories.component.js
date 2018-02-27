(function(){
	'use strict';
	angular.module('data')
	.component('categories', {
		templateUrl:'templates/categorieslist.html',
		bindings:{
			category: '<',
		}		
	});

	
})();