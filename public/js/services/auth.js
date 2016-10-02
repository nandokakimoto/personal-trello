'use strict';

angular.module('personalTrello')
  .factory('Auth', function Auth($location, $rootScope, Session, $cookieStore) {
    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');

    return {
      currentUser: function() {
        Session.get(function(user) {
          $rootScope.currentUser = user;
        });
      },
      logout: function(callback) {
        var cb = callback || angular.noop;
        Session.delete(function(res) {
            $rootScope.currentUser = null;
            return cb();
          },
          function(err) {
            return cb(err.data);
          });
      }
    };
  })
