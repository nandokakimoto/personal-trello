'use strict';

var trello = angular.module('customTrello', ['ngRoute']);

// Signup Controller
trello.controller('SignupCtrl', ['$scope', '$http', function($scope, $http){

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

// Routes
trello.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/welcome',
        controller: ''
      }).
      when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      }).
      when('/signin', {
        templateUrl: 'partials/signin',
        controller: ''
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
