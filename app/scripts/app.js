'use strict';

/**
 * @ngdoc overview
 * @name ngMaterialize
 * @description
 * # materializeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('ngMaterialize', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });

angular.module('ngMaterialize').directive('ngMatSelect', function(){
  return {
    restrict : 'A',
    link : function(scope, elt, attrs){
      elt.material_select();
    }
  }
});
angular.module('ngMaterialize').directive('ngMatCollapsible', function(){
  return {
    restrict : 'A',
    link : function(scope, elt, attrs){
      elt.collapsible();
    }
  }
});
