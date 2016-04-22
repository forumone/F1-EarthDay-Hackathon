angular.module('wildfireHazards').service('mapLocation', function() {
  var location = null;
  
  var dummyData = {
    housingDensity : 200,
    seasonalHousingDensity : 200,
    householdDensity : 200,
    populationDensity : 200,
    area : 1000,
    publicProtected : true,
    amountWildlandVegetation : 1000,
    amountNonWildlandVegetation : 1000,
    percentWildlandVegetation : .5,
    wui : 'Inerface',
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
  
  return {
    setLocation : setLocation,
    getLocation : getLocation,
    getData : getData
  }
});