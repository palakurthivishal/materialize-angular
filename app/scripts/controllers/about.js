'use strict';

/**
 * @ngdoc function
 * @name materializeAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the materializeAngularApp
 */
angular.module('ngMaterialize')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
