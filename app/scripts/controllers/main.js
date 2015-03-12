'use strict';

/**
 * @ngdoc function
 * @name materializeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materializeAngularApp
 */
angular.module('ngMaterialize')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
