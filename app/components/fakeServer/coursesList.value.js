/**
 * @ngdoc value
 * @name coursesList
 * @description
 * contains courses list
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  var coursesList = [
    {
      id: 1,
      title: 'Angular 1.5',
      duration: 111,
      date: new Date(),
      desc: 'Курс даст возможность быстро начать создавать свои приложения с использованием одного из самых популярных на сегодняшний день фреймворков – AngularJS. В процессе прохождения курса шаг за шагом вы сделаете реальное приложение, и хорошо разберетесь в специфике AngularJS.',
      addedAuthors: ['Иванов', 'Петров']
    },
    {
      id: 2,
      title: 'JavaScript и JQuery с нуля',
      duration: 120,
      date: new Date('03.07.2016'),
      desc: 'Eduonix разработали курс, который объединяет в себе информацию о JavaScript и JQuery. Вы узнаете об основах этих технологий: функциях, событиях и проектах, чтобы быстро научиться использовать JavaScript и JQuery для эффективной веб-разработки.',
      addedAuthors: ['Иванов', 'Петров']
    }
  ];

  angular
    .module('fakeServer')
    .value('coursesList', coursesList);
}());

