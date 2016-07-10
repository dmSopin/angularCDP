(function () {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/courses');

      $stateProvider
        .state('login', {
          url: '/login',
          template: '<login-view></login-view>',
          authenticate: false
        })
        .state('courses', {
          url: '/courses',
          template: '<courses-view></courses-view>',
          authenticate: true
        })
        .state('newCourse', {
          url: '/courses/new',
          template: '<course-view></course-view>',
          authenticate: true
        })
        .state('editCourse', {
          url: '/courses/edit/:id',
          template: '<course-view></course-view>',
          authenticate: true
        });
    }])
    .run(['FakeServer', '$rootScope', '$state', 'Authentication', function (FakeServer, $rootScope, $state, Authentication) {
      FakeServer.run();

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        var loginState = Authentication.checkAuthentication();
        if (toState.authenticate && !loginState.isAuthenticated) {
          $state.transitionTo('login');
          event.preventDefault();
        }
      });
    }]);
}());
