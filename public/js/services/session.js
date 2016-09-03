'use strict';

angular.module('customTrello')
  .factory('Session', function ($resource) {
    return $resource('/auth/session/');
  });
