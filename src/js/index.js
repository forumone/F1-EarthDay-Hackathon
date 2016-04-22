var app = angular.module('wildfireHazards', [ 'ngRoute', 'ui.router' ]);
app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Home page
  .state('home', {
    url : '/',
    templateUrl : 'states/home/index.html',
    controller : 'HomeController',
  })
});
