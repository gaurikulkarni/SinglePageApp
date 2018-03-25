(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['info'];
function InfoController(info) {
  var $ctrl = this;
  console.log(info);
  $ctrl.user = info;
};

})();
