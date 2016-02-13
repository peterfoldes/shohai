angular.module('shohaiApp', ['ngRoute', 'CharacterCtrl'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/characters.html',
                contoller: 'CharacterController as characters'
            })
            .otherwise({
                redirectTo:'/'
            });
            
        $locationProvider.html5Mode(true);
    });