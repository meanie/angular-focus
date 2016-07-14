
/**
 * Module definition and dependencies
 */
angular.module('Focus.Service', [])

/**
 * Service definition
 */
.factory('$focus', function($timeout, $window, $log) {
  return function(element, timeout, ensureFocusable, selectText) {

    //Parameter juggling
    if (typeof timeout === 'boolean') {
      selectText = timeout;
      timeout = 0;
    }

    //Run after timeout
    $timeout(() => {

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
        if (selectText) {
          if (!$window.getSelection().toString()) {
            element[0].setSelectionRange(0, element[0].value.length);
          }
        }
      }
    }, timeout || 0);
  };
});
