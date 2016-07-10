/**
 * @ngdoc value
 * @name authorList
 * @description
 * contains author list
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  var authorList = [
    'Иванов',
    'Петров',
    'Сидоров',
    'Лермонтов',
    'Пушкин'
  ];

  angular
    .module('courseView')
    .value('authorList', authorList);
}());

