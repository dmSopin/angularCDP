/**
 * @ngdoc factory
 * @name ArrayHelper
 * @description
 * Helps to work with arrays
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('arrayHelper')
    .factory('ArrayHelper', ArrayHelper);

  ArrayHelper.$inject = [];

  function ArrayHelper () {
    /**
     * @ngdoc method
     * @name findItemById
     * @methodOf ArrayHelper
     * @param {Array} array for search
     * @param {int} object id that need to find
     * @description
     * Find object in array by object id
     * @returns {int} index in array
     */
    function findItemById (arr, id) {
      for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i].id == id) {
          return i;
        }
      }
      return null;
    }

    /**
     * @ngdoc method
     * @name deleteItemById
     * @methodOf ArrayHelper
     * @param {Array} array for search
     * @param {int} object id that need to delete
     * @description
     * Delete object in array by object id
     * @returns {Array} Result array
     */
    function deleteItemById (arr, id) {
      return arr.filter(function (item) {
        return item.id != id;
      });
    }

    /**
     * @ngdoc method
     * @name deleteItemById
     * @methodOf ArrayHelper
     * @param {Array} first array
     * @param {Array} second array
     * @description
     * Subtract two arrays
     * @returns {Array} Result array
     */
    function subtractArrays (firstArr, secondArr) {
      return firstArr.filter(function (item) {
        return secondArr.indexOf(item) < 0;
      });
    }
    return {
      findItemById: findItemById,
      deleteItemById: deleteItemById,
      subtractArrays: subtractArrays
    };
  }
}());

