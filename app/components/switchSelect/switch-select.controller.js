/**
 * @ngdoc controller
 * @name SwitchSelectController
 * @description
 * Controller for switch select component
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('switchSelect')
    .controller('SwitchSelectController', SwitchSelectController);

  SwitchSelectController.$inject = ['ArrayHelper'];

  function SwitchSelectController (ArrayHelper) {
    var vm = this;
    vm.ArrayHelper = ArrayHelper;
  }

  /**
   * @ngdoc method
   * @name addAuthor
   * @methodOf SwitchSelectController
   * @description
   * Add selected authors to added list
   */
  SwitchSelectController.prototype.addAuthor = function () {
    if (this.selectedRemovedAuthors) {
      this.addedAuthors = this.addedAuthors.concat(this.selectedRemovedAuthors);
      this.removedAuthors = this.ArrayHelper.subtractArrays(this.authorList, this.addedAuthors);
      this.selectedRemovedAuthors = [];
    }
  };

  /**
   * @ngdoc method
   * @name removeAuthor
   * @methodOf SwitchSelectController
   * @description
   * Remove selected authors from added list
   */
  SwitchSelectController.prototype.removeAuthor = function () {
    if (this.selectedAddedAuthors) {
      this.removedAuthors = this.removedAuthors.concat(this.selectedAddedAuthors);
      this.addedAuthors = this.ArrayHelper.subtractArrays(this.authorList, this.removedAuthors);
      this.selectedAddedAuthors = [];
    }
  };
}());

