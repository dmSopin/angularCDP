/**
 * @ngdoc filter
 * @name translateDuration
 * @description
 * Convert minutes in hours
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('app')
    .filter('translateDuration', translateDuration);

  translateDuration.$inject = [];

  function translateDuration () {
    return function (value) {
      var hours = Math.floor(value / 60),
          minutes = value - hours * 60,
          result = '';

      if (hours) {
        result = (hours === 1) ? hours + ' час ' : hours + ' часа ';
      }

      result += minutes ? minutes + ' мин.' : '';

      return result;
    };
  }
})();
