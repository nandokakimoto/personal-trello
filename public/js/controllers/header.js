'use strict';

angular.module('personalTrello')
  .controller('HeaderCtrl', function($scope, $location, Auth){

    $scope.logout = function(){
      Auth.logout(function(err) {
        if(!err) {
          $location.path('/signin');
        }
      });
    };
  });
