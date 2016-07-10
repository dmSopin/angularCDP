/**
 * @ngdoc controller
 * @name CoursesViewController
 * @description
 * Controller for courses view component
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('loginView')
    .controller('CoursesViewController', CoursesViewController);

  CoursesViewController.$inject = [
    'ArrayHelper',
    'Courses',
    'ModalFactory'
  ];

  function CoursesViewController (ArrayHelper,
                                  Courses,
                                  ModalFactory) {
    var vm = this;
    vm.wrongAuthData = false;
    vm.ArrayHelper = ArrayHelper;
    vm.Courses = Courses;
    vm.ModalFactory = ModalFactory;
    vm.coursesList = Courses.query();
  }

  /**
   * @ngdoc method
   * @name removeCourse
   * @methodOf CourseViewController
   * @param {int} course id that need to delete
   * @description
   * Remove course by id
   */
  CoursesViewController.prototype.removeCourse = function (courseId) {
    var vm = this;
    this.ModalFactory.confirm({
      title: 'Удаление курса',
      text: 'Вы действительно хотите удалить курс?'
    }).result
      .then(function () {
        vm.Courses.delete({id: courseId}, function () {
          vm.coursesList = vm.ArrayHelper.deleteItemById(vm.coursesList, courseId);
        });
      });
  };
}());

