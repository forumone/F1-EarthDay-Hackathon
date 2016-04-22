angular.module('wildfireHazards').directive('addressSearch', function () {
    function submit(place) {
        console.log(place);
        
        return false;
    }
    
    return {
        restrict: 'E',
        scope: {
        },
        templateUrl: 'components/addresssearch/searchForm.html'
    };
});