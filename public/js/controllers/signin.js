'use strict';

angular.module('personalTrello')
  .controller('SigninCtrl', function($scope, $location, $http, Auth){
    $scope.user = {};
    $scope.errorMessage = "";

    $scope.submitForm = () => {
      $scope.errorMessage = "";
      Auth.login($scope.user, (err) => {
        if (!err) {
          $location.path('/');
        } else {
          $scope.errorMessage = "Invalid credentials. Please, try again.";
        }
      });
    };
  });
