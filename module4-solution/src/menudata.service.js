(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
	
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  }


  service.getItemsForCategory = function (short_name) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+short_name)
    });
    return response;
  };

}	
	
})();