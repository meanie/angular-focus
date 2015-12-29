
/**
 * Module definition and dependencies
 */
angular.module('Focus.Service', [])

/**
 * Service definition
 */
.factory('$focus', function($timeout, $window) {
  return function(element, timeout) {
    $timeout(function() {
      if (typeof element === 'string') {
        element = $window.document.getElementById(element);
      }
      if (element && typeof element.focus === 'function') {
        element.focus();
      }
    }, timeout || 0);
  };
});
