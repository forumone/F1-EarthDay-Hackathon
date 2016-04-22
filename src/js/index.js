var app = angular.module('wildfireHazards', [ 'ngRoute', 'ui.router', 'ngMaterial', 'ngMdIcons' ]);
app.config(function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('deep-orange');
	
  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Home page
  .state('home', {
    url : '/',
    templateUrl : 'states/home/index.html',
    controller : 'HomeController',
  })
  .state('detail', {
	  url : '/detail',
	  templateUrl : 'states/detail/index.html',
	  controller : 'DetailController'
  })
  .state('about', {
    url : '/about',
    templateUrl : 'states/about/index.html',
    controller : 'AboutController'
  });
})
.constant('wuiCategories', {
  housingDensity : { title : 'Housing Density', unit : 'Units/Sq. km' },
  seasonalHousingDensity : { title : 'Seasonal Housing Density', unit : 'Units/Sq. km' },
  householdDensity : { title : 'Household Density', unit : 'Units/Sq. km' },
  populationDensity : { title : 'Population Density', unit : 'People/Sq. km' },
  area : { title : 'Area', unit : 'Sq. m' },
  publicProtected : { title : 'Public or Protected?', unit : ''},
  amountWildlandVegetation : { title : 'Amount of Wild-Land Vegetation', unit : 'Sq. m' },
  amountNonWildlandVegetation : { title : 'Amount of Non Wild-Land Vegetation', unit : 'Sq. m' },
  percentWildlandVegetation : { title : '% of Wild Land Vegetation', unit : '' },
  wui : { title : 'WUI Flag', unit : '' },
  interfaceDensity : { title : 'Interface', unit : '' },
  intermixDensity : { title : 'Intermix', unit : '' },
  vegetationDensity : { title : 'Vegetation', unit : '' },
  nonVegetationDensity : { title : 'Non-Vegetation', unit : '' },
  housingUnits : { title : 'Housing Units', unit : '' },
  seasonalHousingUnits : { title : 'Seasonal Housing Units', unit : '' },
  households : { title : 'Households', unit : '' },
  people : { title : 'People', unit : '' }
})
.run(function() {
  L.mapbox.accessToken = 'pk.eyJ1Ijoid2h1cmxleWYxIiwiYSI6ImNpbjdyNjQ4cDBnN2t1dWx6dDVvdXI0cGoifQ.v2Hs39N01bCFlQx5PpodUw';
});
