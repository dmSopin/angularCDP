/**
 * @ngdoc component
 * @name courseView
 * @description
 * show form create/update course
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('courseView')
    .component('courseView', {
      templateUrl: 'views/course-view/course-view.tpl.html',
      controller: 'CourseViewController as vm'
    });
}());

