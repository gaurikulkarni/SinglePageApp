(function(){
	'use strict';
	angular.module('data')
	.controller('ItemsController',ItemsController);
	
	ItemsController.$inject = ['item'];
	function ItemsController(item) {
		var itemslist = this;
		itemslist.item = item.data.menu_items;
	}


	
})();