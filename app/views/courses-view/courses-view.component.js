/**
 * @ngdoc component
 * @name coursesView
 * @description
 * show courses list
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('coursesView')
    .component('coursesView', {
      templateUrl: 'views/courses-view/courses-view.tpl.html',
      controller: 'CoursesViewController as vm'
    });
}());

