
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
});
