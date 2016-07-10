/**
 * @ngdoc controller
 * @name LoginViewController
 * @description
 * Controller for login view component
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('loginView')
    .controller('LoginViewController', LoginViewController);

  LoginViewController.$inject = [
    '$state',
    'Authentication'
  ];

  function LoginViewController ($state,
                                Authentication) {
    var vm = this;
    vm.Authentication = Authentication;
    vm.$state = $state;
    vm.wrongAuthData = false;

    if (vm.Authentication.checkAuthentication().isAuthenticated) {
      vm.$state.go('courses');
    }
  }

  /**
   * @ngdoc method
   * @name login
   * @methodOf LoginViewController
   * @description
   * login user on the site
   */
  LoginViewController.prototype.login = function () {
    var vm = this;
    this.Authentication.authorize(this.username, this.password)
      .then(function (responce) {
        vm.Authentication.setAuthentication(true, responce.data.userName);
        vm.$state.go('courses');
      })
      .catch(function () {
        vm.wrongAuthData = true;
        vm.password = '';
      });
  };
}());

