'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
  .controller('HeaderCtrl', function($scope, $location, Auth) {
    $scope.logout = function() {
      Auth.logout(function(err) {
        if (!err) {
          $location.path('/signin');
        }
      });
    };
  });
