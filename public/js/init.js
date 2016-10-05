'use strict';

angular.module('personalTrello', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.run(function ($rootScope, $location, Auth) {
  //watching the value of the currentUser variable.
  $rootScope.$watch('currentUser', function(currentUser) {
    // if no currentUser and on a page that requires authorization then try to update it
    // will trigger 401s if user does not have a valid session
    if (!currentUser && (['/signin', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
      Auth.currentUser();
    }
  });
});
