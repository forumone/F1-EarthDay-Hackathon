angular.module('wildfireHazards').controller('DetailController', function($scope, wuiCategories, mapLocation) {
  $scope.wuiCategories = wuiCategories;
  $scope.getData = mapLocation.getData
  $scope.location = mapLocation.getLocation();
});
