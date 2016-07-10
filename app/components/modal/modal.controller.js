/**
 * @ngdoc controller
 * @name ModalController
 * @description
 * Controller for Modal popups
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('modal')
    .controller('ModalController', ModalController);

  ModalController.$inject = [
    '$modalInstance',
    'getData'
  ];

  function ModalController ($modalInstance,
                            getData) {
    var vm = this;
    vm.data = getData;
    vm.$modalInstance = $modalInstance;
  }

  /**
   * @ngdoc method
   * @name confirm
   * @methodOf ModalController
   * @description
   * Confirm modal popup
   */
  ModalController.prototype.confirm = function () {
    this.$modalInstance.close();
  };

  /**
   * @ngdoc method
   * @name dismiss
   * @methodOf ModalController
   * @description
   * Close modal popup
   */
  ModalController.prototype.dismiss = function () {
    this.$modalInstance.dismiss();
  };
}());

