angular.module('wildfireHazards').service('mapLocation', function() {
  var location = null;
  var lat = null;
  var lng = null;
  
  var dummyData = {
    housingDensity : 200,
    seasonalHousingDensity : 200,
    householdDensity : 200,
    populationDensity : 200,
    area : 1000,
    publicProtected : 'No housing',
    amountWildlandVegetation : 1000,
    amountNonWildlandVegetation : 1000,
    percentWildlandVegetation : '50%',
    wui : 'Interface',
    interfaceDensity : 'High density',
    intermixDensity : null,
    vegetationDensity : null,
    nonVegatationDensity : null,
    housingUnits : 1000,
    seasonalHousingUnits : 1000,
    households : 1000,
    people : 1000
  };
  
  function setLocation(loc) {
    location = loc;
  }
  
  function getLocation() {
    return location;
  }
  
  function getData(name) {
    return dummyData[name];
  }
  
  function getLat() {
    return lat;
  }
  
  function setLat(l) {
    lat = l;
  }
  
  function getLng() {
    return lng;
  }
  
  function setLng(l) {
    lng = l;
  }
  
  return {
    setLocation : setLocation,
    getLocation : getLocation,
    getData : getData
  }
});