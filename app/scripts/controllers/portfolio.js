'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.titleEn = [
     	{title:'Here\'s some stuff I made.'}
    ];

    $scope.titleEs = [
     	{title:'Aqui estan algunas cosas que he hecho'}
    ];


    $scope.angularEn = [
    	{year:'2015:',name:'AngularJS ToDo', description:'a simple Angular ToDo list with Local Storage.'},
    	{year:'2015:',name:'Movie\'s billboard', description:'billboard of movies connected to Rotten Tomatoes API.'},
    	{year:'2015:',name:'Website Prototype', description:'a web prototype with forms, validation and grid.'}
    ];


  });
