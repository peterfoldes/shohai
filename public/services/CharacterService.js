function CharacterService($http, $q) {
    var service = {};

    service.getAll = function() {
        return $http.get('/api/characters');
    };

    return service;
}

angular.module('CharacterService', [])
    .factory('Characters', ['$http', CharacterService]);
