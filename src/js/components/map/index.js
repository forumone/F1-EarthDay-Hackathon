angular.module('wildfireHazards').directive('mapboxMap', function (mapRegistry) {
  return {
    restrict : 'E',
    scope : {
      zoom : '@',
      lat : '@',
      lng : '@'
    },
    link : function (scope, element, attrs) {
      lat = scope.lat || -77.38;
      lng = scope.lng || 39;
      
      scope.map = new mapboxgl.Map({
        container: attrs.id, // container id
        style: 'mapbox://styles/whurleyf1/cinc2cglt00vmx9notjcfy2h8', //hosted style id
        center: [lat, lng], // starting position
        zoom: 2 // starting zoom
      });
      
      
      mapRegistry.registerMap(attrs.id, scope.map);
    }
  }
});