/**
 * @ngdoc factory
 * @name FakeServer
 * @description
 * Emulating REST API server
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('fakeServer')
    .factory('FakeServer', FakeServer);

  FakeServer.$inject = [
    '$httpBackend',
    'ArrayHelper',
    'coursesList'
  ];

  function FakeServer ($httpBackend,
                       ArrayHelper,
                       coursesList) {
    var courses = coursesList;

    return {
      run: function () {
        $httpBackend.whenGET(/\.html/).passThrough();

        $httpBackend.whenGET(/^\/courses\/[0-9]+/).respond(function (method, url, data, headers) {
          var courseId = url.match('\/courses\/([0-9]+)')[1],
              index = ArrayHelper.findItemById(courses, courseId);
          return (index != null) ? [200, courses[index]] : [401, {success: false}];
        });

        $httpBackend.whenGET('/courses').respond(function () {
          return [200, courses];
        });

        $httpBackend.whenDELETE(/^\/courses\/[0-9]+/).respond(function (method, url, data, headers) {
          var courseId = url.match('\/courses.*([0-9]+)')[1];
          courses = ArrayHelper.deleteItemById(courses, courseId);
          return [200, {success: true}];
        });

        $httpBackend.whenPOST('/courses').respond(function (method, url, data, headers) {
          var courseItem = angular.fromJson(data);
          courseItem.id = (courses.length) ? courses[courses.length - 1].id + 1 : 1;
          courseItem.date = new Date(courseItem.date);
          courses.push(courseItem);
          return [200, courseItem];
        });

        $httpBackend.whenPUT('/courses').respond(function (method, url, data, headers) {
          var courseItem = angular.fromJson(data),
              index = ArrayHelper.findItemById(courses, courseItem.id);

          if(index != null) {
            courseItem.date = new Date(courseItem.date);
            courses[index] = courseItem;
            return [200, courses[index]];
          }
          return [401, {success: false}];
        });

        $httpBackend.whenPOST(/^checkAuth\/.*/).respond(function (method, url, data, headers) {
          var authData = angular.fromJson(data);

          if (authData.username === 'admin' && authData.password === 'admin') {
            return [200, {success: true, userName: authData.username}];
          }
          return [401, {success: false}];
        });
      }
    };
  }
}());

