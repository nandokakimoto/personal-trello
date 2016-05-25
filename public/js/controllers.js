'use strict';

angular.module('customTrello')
  .controller('SignupCtrl', ['$scope', '$http', function($scope, $http){
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
          alert('success');
        },
        function error(response){
          alert('error');
        }
      );
    };

  }]);
