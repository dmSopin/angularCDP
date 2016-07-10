/**
 * @ngdoc component
 * @name switchSelect
 * @description
 * show search form
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('search')
    .component('search', {
      bindings: {
        filterSearch: '='
      },
      templateUrl: 'components/search/search.tpl.html',
      controller: 'SearchController as vm'
    });
}());

