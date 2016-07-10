/**
 * @ngdoc component
 * @name loginView
 * @description
 * show login view
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('loginView')
    .component('loginView', {
      templateUrl: 'views/login-view/login-view.tpl.html',
      controller: 'LoginViewController as vm'
    });
}());

