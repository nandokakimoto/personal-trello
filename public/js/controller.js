'use strict';

var trello = angular.module('customTrello', ['ngRoute']);

trello.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/welcome',
        controller: ''
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
