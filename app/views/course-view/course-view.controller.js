/**
 * @ngdoc controller
 * @name CourseViewController
 * @description
 * Controller for course view component
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('loginView')
    .controller('CourseViewController', CourseViewController);

  CourseViewController.$inject = [
    '$state',
    '$stateParams',
    'ArrayHelper',
    'Courses',
    'ModalFactory',
    'authorList'
  ];

  function CourseViewController ($state,
                            $stateParams,
                            ArrayHelper,
                            Courses,
                            ModalFactory,
                            authorList) {
    var vm = this;
    vm.$state = $state;
    vm.ArrayHelper = ArrayHelper;
    vm.Courses = Courses;
    vm.idEditState = $stateParams.id;
    vm.ModalFactory = ModalFactory;
    vm.authorList = authorList;
    vm.course = {};

    if (vm.idEditState) {
      vm.Courses.get({id: $stateParams.id}).$promise
        .then(function (data) {
          vm.course = data;
          vm.removedAuthors = vm.ArrayHelper.subtractArrays(vm.authorList, vm.course.addedAuthors);
        })
        .catch(function () {
          vm.$state.go('courses');
        });
    } else {
      vm.course.addedAuthors = [];
      vm.removedAuthors = vm.ArrayHelper.subtractArrays(vm.authorList, vm.course.addedAuthors);
    }
  }

  /**
   * @ngdoc method
   * @name save
   * @methodOf CourseViewController
   * @description
   * Create/update course
   */
  CourseViewController.prototype.save = function () {
    if (this.courseForm.$valid) {
      this.idEditState ? this.Courses.update(this.course) : this.Courses.save(this.course);
      this.$state.go('courses');
    } else {
      this.isSubmitted = true;
      this.ModalFactory.alert({
        title: 'Ошибка',
        text: 'Некоторые поля формы заполнены неверно!'
      });
    }
  };
}());

