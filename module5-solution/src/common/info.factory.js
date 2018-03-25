(function () {
"use strict";

angular.module('common')
.service('InfoFactory', InfoFactory);

function InfoFactory() {
  var userinfo = this;
  userinfo.info = null;
  userinfo.add = function(info){
	userinfo.info = info;  
  };
   userinfo.get = function(){
	return userinfo.info;  
  };
};


})();
