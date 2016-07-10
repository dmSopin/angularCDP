/**
 * @ngdoc component
 * @name switchSelect
 * @description
 * show switch select
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('switchSelect')
    .component('switchSelect', {
      bindings: {
        authorList: '=',
        addedAuthors: '=',
        removedAuthors: '='
      },
      templateUrl: 'components/switchSelect/switch-select.tpl.html',
      controller: 'SwitchSelectController as vm'
    });
}());

