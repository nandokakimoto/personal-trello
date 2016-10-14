'use strict';

angular.module('personalTrello') // eslint-disable-line no-undef
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
        var cb = callback || angular.noop; // eslint-disable-line no-undef
        Session.delete(function(res) {
          $rootScope.currentUser = null;
          return cb();
        },
        function(err) {
          return cb(err.data);
        });
      },
      login: (user, callback) => {
        var cb = callback || angular.noop; // eslint-disable-line no-undef
        Session.save({email: user.email, password: user.password},
          user => {
            console.log('success', user);
            $rootScope.currentUser = user;
            return cb();
          },
          err => {
            console.log('error', err);
            return cb(err.data);
          });
      }
    };
  });
