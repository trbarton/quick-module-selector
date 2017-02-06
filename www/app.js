angular.module('modules', [])
  .controller('AppController', function ($http, $scope, $window, $location) {
    $http.get('modules.json').then(function (res) {
      $scope.modules = res.data;
    });

    $scope.redirect = function(url, refresh) {
      if(refresh || $scope.$$phase) {
        $window.location.href = url;
      } else {
        $location.path(url);
        $scope.$apply();
      }
    }
  });