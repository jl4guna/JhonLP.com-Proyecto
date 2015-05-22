'use strict';

describe('Controller: UsesCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var UsesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsesCtrl = $controller('UsesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
