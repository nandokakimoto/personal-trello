'use strict';

angular.module('personalTrello', [ // eslint-disable-line no-undef
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function($qProvider) {
  // Handles 'Possibly unhandled rejection'
  // See https://github.com/angular-ui/ui-router/issues/2889 for more details.
  $qProvider.errorOnUnhandledRejections(false);
})
.run(function($rootScope, $location, Auth) {
  // watching the value of the currentUser variable.
  $rootScope.$watch('currentUser', function(currentUser) {
    // if no currentUser and on a page that requires authorization then try to update it
    // will trigger 401s if user does not have a valid session
    if (!currentUser &&
      (['/signin', '/logout', '/signup'].indexOf($location.path()) === -1)) {
      Auth.currentUser();
    }
  });
});
