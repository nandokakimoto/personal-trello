'use strict';

angular.module('personalTrello')
  .controller('SigninCtrl', function($scope, $http){
    $scope.user = {
      email: 'nandokakimoto@gmail.com',
      password: '12345678'
    };

    $scope.submitForm = function(){
      $http({
        method: 'POST',
        url: '/auth/session',
        data: $scope.user
      }).then(
        function success(response){
          alert('success');
        },
        function error(response){
          alert('error');
        }
      );
    };
  });
