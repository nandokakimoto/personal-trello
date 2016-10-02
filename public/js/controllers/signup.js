'use strict';

angular.module('personalTrello')
  .controller('SignupCtrl', function($scope, $http, $rootScope, $location){
    $scope.user = {};

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
