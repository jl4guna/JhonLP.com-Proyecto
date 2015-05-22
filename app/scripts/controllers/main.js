'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.EnVi = true;
  	$scope.EsVi = false;

  	$scope.toggle = function () {
      $scope.EnVi = !$scope.EnVi;
      $scope.EsVi = !$scope.EsVi;

   };

  	$scope.titleEn=[{title:'I build websites, software and mobile apps.'}];	
  	$scope.goodEn = [
      {title:'I\'m a developer.', description:'I write Java, C# and JavaScript. I design databases and write SQL.'},
      {title:'I\'m a front-end web developer.', description:'I write HTML, client-side JavaScript, CSS and deal with browser compatibility.'},
      {title:'I\'m a back-end web developer.', description:'I write PHP, Python, and server-side JavaScript.'}
    ];

    $scope.warningEn = [
    	{title:'I\'m a limited sysadmin.',description:'DevOps: yes. Pager duty: no.'}
    ];

    $scope.badEn = [
    	{title:'I\'m not a designer.', description:'Some people are designers. I am not.'}
    ];

  	$scope.titleEs=[{title:'Desarrollo paginas web, software y aplicaciones moviles.'}];

  	$scope.goodEs = [
      {title:'Soy desarrollador.', description:'Escribo Java, C# y JavaScript. Diseño bases de datos y escribo SQL.'},
      {title:'Soy desarrollador front-end.', description:'Escribo HTML, JavaScript de lado del cliente, CSS y lidio con comptibilidad de navegadores.'},
      {title:'Soy desarrollador back-end.', description:'Escribo PHP, Python, y JavaScript de lado del servidor.'}
    ];

    $scope.warningEs = [
    	{title:'Tengo limitaciones como administrador de sistemas.',description:'DevOps: Si. Pager duty: no.'}
    ];

    $scope.badEs = [
    	{title:'No soy diseñador.', description:'Algunas personas son programadores y diseñadores, yo no.'}
    ];


  });
