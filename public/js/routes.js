'use strict';

angular.module('customTrello')
  .config(['$routeProvider',
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
