angular.module('shohaiApp', ['ngRoute', 'CharacterCtrl', 'CharacterService'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/characters.html',
                contoller: 'CharacterController'
            })
            .otherwise({
                redirectTo:'/'
            });
            
        $locationProvider.html5Mode(true);
    });