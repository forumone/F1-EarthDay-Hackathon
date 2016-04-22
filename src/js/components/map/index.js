angular.module('wildfireHazards').directive('mapboxMap', function () {
  return {
    restrict : 'E',
    scope : {
      zoom : '@',
      lat : '@',
      lng : '@'
    },
    link : function (scope, element, attrs) {
      scope.map = new mapboxgl.Map({
        container: attrs.id, // container id
        style: 'mapbox://styles/whurleyf1/cinc2cglt00vmx9notjcfy2h8', //hosted style id
        center: [-77.38, 39], // starting position
        zoom: 3 // starting zoom
    });
    }
  }
});