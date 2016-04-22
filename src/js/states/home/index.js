angular.module('wildfireHazards').controller('HomeController', function($scope, mapRegistry, $state, mapLocation) {
  $scope.addMarker = function(place) {
    map = mapRegistry.getMap('homeMap');
    var latlng = place.geometry.location;
    map.jumpTo({ center : [latlng.lng(), latlng.lat()], zoom : 14 });
    
    
    map.on('click', function (e) {
      mapLocation.setLat(latlng.lat());
      mapLocation.setLng(latlng.lng());
      mapLocation.setLocation(place.formatted_address);
      $state.go('detail');
    });
  }
});
