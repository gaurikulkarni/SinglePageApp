(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])	
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
	;
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;
		buy.itemName = "";
		buy.itemQuantity = "";
		
		buy.toBuyList = ShoppingListCheckOffService.getBuyList();
		
		buy.addItem = function(){
			ShoppingListCheckOffService.addItem(buy.itemName,buy.itemQuantity);
		};
		
		buy.removeItem = function(index){
			ShoppingListCheckOffService.removeItem(index);
		};
	};
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		bought.boughtList = ShoppingListCheckOffService.getBoughtList();
	};
	
	function ShoppingListCheckOffService(){
		var service = this;
		var toBuyList = [
			{"name": "cookies", "quantity": 10},
			{"name": "bread", "quantity": 1},
			{"name": "milk", "quantity": 2},
			{"name": "eggs", "quantity": 12},
			{"name": "apples", "quantity": 6},
		];
		
		var boughtList = [];
		
		service.getBuyList = function(){
			return toBuyList;
		};
		
		service.getBoughtList = function(){
			return boughtList;
		};
		
		service.addItem = function(itemName,itemQuantity){
			var item = {"name": itemName, "quantity": itemQuantity};
			toBuyList.push(item);
		}
		
		service.removeItem = function(index){
			var item = toBuyList[index];
			toBuyList.splice(index,1);
			boughtList.push(item);
		};		
	};
})();