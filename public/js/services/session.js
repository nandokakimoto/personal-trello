'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
  .factory('Session', function($resource) {
    return $resource('/auth/session/');
  });
