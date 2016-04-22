angular.module('wildfireHazards').controller('HomeController', function($scope, mapRegistry, $state, mapLocation) {
  $scope.addMarker = function(place) {
    map = mapRegistry.getMap('homeMap');
    var latlng = place.geometry.location;
    map.jumpTo({ center : [latlng.lng(), latlng.lat()], zoom : 14 });
    
    map.addSource('symbols', {
      type : 'geojson',
      data : {
        type : 'FeatureCollection',
        features : [{
          type : 'Feature',
          properties : {},
          geometry : {
            type : 'Point',
            coordinates : [latlng.lng(), latlng.lat()]
          }
        }]
      }
    });
    
    map.addLayer({
      "id": "symbols",
      "type": "symbol",
      "source": "symbols",
      "layout": {
          "icon-image": "marker-15"
      },
      "paint": {}
    });
    
    map.on('click', function (e) {
      mapLocation.setLat(latlng.lat());
      mapLocation.setLng(latlng.lng());
      mapLocation.setLocation(place.formatted_address);
      $state.go('detail');
    });
  }
});
