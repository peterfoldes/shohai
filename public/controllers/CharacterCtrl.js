function CharacterCtrl($scope, Characters) {
    $scope.title = 'Charater list';

    Characters.getAll().success(function(chars, status) {
        $scope.characters = chars;
        console.log($scope.characters);
    });
}

angular.module('CharacterCtrl', [])
    .controller('CharacterController', CharacterCtrl);
