'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'partials/welcome',
          controller: ''
        })
        .when('/signup', {
          templateUrl: 'partials/signup',
          controller: 'SignupCtrl'
        })
        .when('/signin', {
          templateUrl: 'partials/signin',
          controller: 'SigninCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ]);
