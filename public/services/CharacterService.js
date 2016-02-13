function CharacterService($http) {
    return {
        get : function() {
            return $http.get('/api/characters');
        }
    }
}

//angular.module('CharacterService', []).factory('Character', ['$http', CharacterService]);