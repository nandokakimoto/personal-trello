'use strict';

var trello = angular.module('customTrello', ['ngRoute']);

trello.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/welcome',
        controller: ''
      }).
      when('/signup', {
        templateUrl: 'partials/signup',
        controller: ''
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
