/**
 * @ngdoc factory
 * @name ModalFactory
 * @description
 * Creates modal popups
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('modal')
    .factory('ModalFactory', ModalFactory);

  ModalFactory.$inject = ['$uibModal'];

  function ModalFactory ($uibModal) {
    /**
     * @ngdoc method
     * @name confirm
     * @methodOf ModalFactory
     * @param {object} title and text for confirm modal
     * @description
     * Open confirm popup
     * @returns {object} Promise for modal popup
     */
    function confirm (data) {
      return $uibModal.open({
        templateUrl: 'components/modal/confirm.modal.tpl.html',
        controller: 'ModalController as vm',
        size: 'sm',
        resolve: {
          getData: function () {
            return data;
          }
        }
      });
    }

    /**
     * @ngdoc method
     * @name alert
     * @methodOf ModalFactory
     * @param {object} title and text for alert modal
     * @description
     * Open alert popup
     * @returns {object} Promise for modal popup
     */
    function alert (data) {
      return $uibModal.open({
        templateUrl: 'components/modal/alert.modal.tpl.html',
        controller: 'ModalController as vm',
        size: 'sm',
        resolve: {
          getData: function () {
            return data;
          }
        }
      });
    }

    return {
      confirm: confirm,
      alert: alert
    };
  }
}());

