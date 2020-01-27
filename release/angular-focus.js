/**
 * @meanie/angular-focus * https://github.com/meanie/angular-focus
 *
 * Copyright (c) 2020 Adam Reis <adam@reis.nz>
 * License: MIT
 */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, angular, undefined) {
  'use strict';

  /**
   * Module definition and dependencies
   */

  angular.module('Focus.Service', [])

  /**
   * Service definition
   */
  .factory('$focus', ['$timeout', '$window', '$log', function ($timeout, $window, $log) {
    return function (element, timeout, ensureFocusable, selectText) {

      //Parameter juggling
      if (typeof timeout === 'boolean') {
        selectText = timeout;
        timeout = 0;
      }

      //Run after timeout
      $timeout(function () {

        //Invalid input
        if (!element || typeof element !== 'string' && (typeof element === 'undefined' ? 'undefined' : _typeof(element)) !== 'object') {
          return $log.warn('Invalid element supplied for $focus:', element);
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
          if (selectText && element.setSelectionRange) {
            if (!$window.getSelection().toString()) {
              element.setSelectionRange(0, element.value.length);
            }
          }
        }
      }, timeout || 0);
    };
  }]);
})(window, window.angular);