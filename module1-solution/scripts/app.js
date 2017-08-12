(function(){
	'use strict';
	angular.module('LunchCheck',[])
	
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject = ['$scope','$filter'];
	function LunchCheckController($scope,$filter){
		$scope.items = "";
		$scope.quantText = "";
		$scope.textColor = "";
		$scope.borderColor = "";
		var lunchItems = [];
		$scope.checkQuant = function(){
			$scope.items  = $scope.items.trim();			
			if($scope.items ==""){
				$scope.quantText = "Please Enter Data first!";
				$scope.textColor = {"color":"red"};
				$scope.borderColor = {"border":"1px solid red"};
			}
			else{
				$scope.textColor = {"color":"green"};
				$scope.borderColor = {"border":"1px solid green"};
				var lunchItems = $scope.items.split(",");
				var count = 0;
				for(var i in lunchItems){
					if(lunchItems[i].trim() != ""){
						count++;
					}
				}
				if(count <=3){
					$scope.quantText = "Enjoy!";
				}
				else{
					$scope.quantText = "Too Much!";
				}
			}
		}
	};
})();