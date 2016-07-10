/**
 * @ngdoc factory
 * @name Courses
 * @description
 * CRUD operations with courses
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('courses')
    .factory('Courses', Courses);

  Courses.$inject = ['$resource'];

  function Courses ($resource) {
    return $resource('/courses/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  }
}());

