'use strict';

angular.module('personalTrello')
  .controller('SigninCtrl', function($scope, $location, $http, Auth){
    $scope.user = {};

    $scope.submitForm = () => {
      Auth.login($scope.user, (err) => {
        if (!err) {
          $location.path('/');
        } else {
          alert('error');
        }
      });
    };
  });
