// public/js/routes/routes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/beacons.html',
            controller: 'mainController'
        })

        .when('/sequence', {
            templateUrl: 'views/sequence.html',
            controller: 'sequenceController'
        })

        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'mainController'
        });

    $locationProvider.html5Mode(true);

}]);
