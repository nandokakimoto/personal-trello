'use strict';

angular.module('customTrello')
  .controller('SignupCtrl', function($scope, $http, $rootScope, $location){
    $scope.user = {
      name: 'Fernando Kakimoto',
      email: 'nandokakimoto@gmail.com',
      password: '12345678'
    };

    $scope.submitForm = function(){
      $http({
        method: 'POST',
        url: '/users/signup',
        data: $scope.user
      }).then(
        function success(response){
          $rootScope.currentUser = response.data;
          $location.path('/');
        },
        function error(response){
          alert('error');
        }
      );
    };
  });
