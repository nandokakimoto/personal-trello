'use strict';

angular.module('personalTrello')
  .factory('Session', function ($resource) {
    return $resource('/auth/session/');
  });
