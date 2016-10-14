'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
  .controller('SignupCtrl', function($scope, $http, $rootScope, $location) {
    $scope.user = {};
    $scope.errorMessages = "";

    $scope.submitForm = function() {
      $scope.errorMessages = [];

      $http({
        method: 'POST',
        url: '/users/signup',
        data: $scope.user
      }).then(
        response => {
          $rootScope.currentUser = response.data;
          $location.path('/');
        },
        response => {
          var errors = response.data.errors;
          angular.forEach(errors, function(value, field) { // eslint-disable-line no-undef
            $scope.errorMessages.push(value.message);
          });
        }
      );
    };
  });
