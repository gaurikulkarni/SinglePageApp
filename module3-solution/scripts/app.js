(function(){
	'use strict';
	angular.module('NarrowItDownApp',[])	
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',foundItemsDirective)
	;
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var search = this;
		search.found = [];
		search.searchTerm = "";
		search.getMatchedMenuItems = function(){
			var promise = MenuSearchService.getMatchedMenuItems();			
			promise.then(function(response){
				var items = response.data["menu_items"];
				for (var i in items){					
					if(items[i].description.indexOf(search.searchTerm) > -1){
						search.found.push(items[i]);
					}
				}
			});			
		};
		
		search.removeItem = function(index){
			search.found.splice(index,1);
		}
	};
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
		
		service.getMatchedMenuItems = function(){
			//$http service here finds and returns
			var items = $http({
				method:"GET",
				url:("https://davids-restaurant.herokuapp.com/menu_items.json")
			});
			
			return items;
		}	
		
	};
	
	function foundItemsDirective(){
		var ddo = {
			templateUrl : 'listItem.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller:NarrowItDownController,
			controllerAs:'list',
			bindToController:true
		}
		return ddo;
	}
})();