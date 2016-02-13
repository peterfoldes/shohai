function CharacterCtrl($scope) {
    $scope.title = 'Charater list';
    $scope.characters = [
        {name: "A"},
        {name: "B"}
    ];
}

angular.module('CharacterCtrl', []).controller('CharacterController', CharacterCtrl);
