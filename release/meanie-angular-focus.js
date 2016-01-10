/**
 * meanie-angular-focus - v1.2.0 - 11-0-2016
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
.factory('$focus', ['$timeout', '$window', function($timeout, $window) {
  return function(element, timeout) {
    $timeout(function() {

      //String ID
      if (typeof element === 'string') {
        element = $window.document.getElementById(element);
      }

      //jQuery element
      if (typeof element[0] !== 'undefined') {
        element = element[0];
      }

      //HTML DOM element
      if (element && typeof element.focus === 'function') {
        element.focus();
      }
    }, timeout || 0);
  };
}]);

})(window, window.angular);
