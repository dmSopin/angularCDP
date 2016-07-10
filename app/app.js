/**
 * @name app
 * @description
 * Main module
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular.module('app', [
    'authentication',
    'coursesView',
    'courseView',
    'fakeServer',
    'loginView',
    'ui.router',
    'userProfileView'
  ]);
}());
