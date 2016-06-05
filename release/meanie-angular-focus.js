/**
 * meanie-angular-focus - v1.3.4 - 5-5-2016
 * https://github.com/meanie/angular-focus
 *
 * Copyright (c) 2016 Adam Buczynski <me@adambuczynski.com>
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * Module definition and dependencies
 */
angular.module('Focus.Service', [])

/**
 * Service definition
 */
.factory('$focus', ['$timeout', '$window', '$log', function($timeout, $window, $log) {
  return function(element, timeout, ensureFocusable) {
    $timeout(function() {

      //Invalid input
      if (
        !element ||
        (typeof element !== 'string' && typeof element !== 'object')
      ) {
        $log.warn('Invalid element supplied for $focus:', element);
        return;
      }

      //String ID
      if (typeof element === 'string') {
        element = $window.document.getElementById(element);
      }

      //jQuery element
      if (element && typeof element[0] !== 'undefined') {
        element = element[0];
      }

      //HTML DOM element
      if (element && typeof element.focus === 'function') {
        if (ensureFocusable) {
          element.setAttribute('tabindex', -1);
        }
        element.focus();
      }
    }, timeout || 0);
  };
}]);

})(window, window.angular);
