angular.module('wildfireHazards').directive('addressSearch', function () {
    return {
        restrict: 'E',
        scope: {
          submit : '='
        },
        templateUrl: 'components/addresssearch/searchForm.html',
    };
});