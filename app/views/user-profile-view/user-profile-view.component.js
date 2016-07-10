/**
 * @ngdoc component
 * @name userProfile
 * @description
 * show user profile
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('userProfileView')
    .component('userProfile', {
      templateUrl: 'views/user-profile-view/user-profile-view.tpl.html',
      controller: 'UserProfileViewController as vm'
    });
}());

