/**
 * meanie-angular-focus - v1.0.0 - 24-11-2015
 * https://github.com/meanie/angular-focus
 *
 * Copyright (c) 2015 Adam Buczynski <me@adambuczynski.com>
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
  return function(element) {
    if (typeof element === 'string') {
      element = $window.document.getElementById(element);
    }
    if (!element || typeof element.focus !== 'function') {
      return;
    }
    $timeout(function() {
      element.focus();
    });
  };
}]);

})(window, window.angular);
