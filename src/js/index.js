var app = angular.module('wildfireHazards', [ 'ngRoute', 'ui.router', 'ngMaterial' ]);
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
});