'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
  .controller('SigninCtrl', function($scope, $location, $http, Auth) {
    $scope.user = {};
    $scope.errorMessage = "";

    $scope.submitForm = () => {
      $scope.errorMessage = "";
      Auth.login($scope.user, err => {
        if (err) {
          $scope.errorMessage = "Invalid credentials. Please, try again.";
        } else {
          $location.path('/');
        }
      });
    };
  });
