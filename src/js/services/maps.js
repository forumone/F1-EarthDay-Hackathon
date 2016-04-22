angular.module('wildfireHazards').service('mapRegistry', function() {
  var maps = {};
  
  function registerMap(id, map) {
    maps[id] = map;
  }
  
  function getMap(id) {
    return maps[id];
  }
  
  function getMaps() {
    return maps;
  }
  
  return {
    registerMap : registerMap,
    getMap : getMap,
    getMaps : getMaps
  }
});