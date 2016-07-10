/**
 * @ngdoc controller
 * @name UserProfileViewController
 * @description
 * Controller for user profile view component
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('userProfileView')
    .controller('UserProfileViewController', UserProfileViewController);

  UserProfileViewController.$inject = [
    '$state',
    'Authentication'
  ];

  function UserProfileViewController ($state,
                                  Authentication) {
    var vm = this;
    vm.Authentication = Authentication;
    vm.$state = $state;
    vm.loginState = Authentication.checkAuthentication();
  }

  /**
   * @ngdoc method
   * @name logOut
   * @methodOf UserProfileViewController
   * @description
   * log out user on the site
   */
  UserProfileViewController.prototype.logOut = function () {
    this.Authentication.setAuthentication(false);
    this.$state.go('login');
  };
}());

