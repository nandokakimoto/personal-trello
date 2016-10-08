'use strict';

angular.module('personalTrello')
  .controller('SignupCtrl', function($scope, $http, $rootScope, $location){
    $scope.user = {};
    $scope.errorMessages = "";

    $scope.submitForm = function(){
      $scope.errorMessages = [];

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
          var errors = response.data.errors;
          angular.forEach(errors, function(value, field) {
            $scope.errorMessages.push(value.message);
          });
        }
      );
    };
  });
