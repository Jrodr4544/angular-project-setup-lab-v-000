function MainController($scope) {
  $scope.name = 'blah!';
}

angular
  .module('app')
  .controller('MainController', MainController);