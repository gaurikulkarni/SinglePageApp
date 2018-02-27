(function(){
	'use strict';
	angular.module('data')
	.controller('CategoriesController',CategoriesController);
	
	CategoriesController.$inject = ['category'];
	function CategoriesController(category) {
		var categorieslist = this;
		categorieslist.category = category.data;
	}


	
})();