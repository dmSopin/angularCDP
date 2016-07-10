'use strict';

describe('controller: LoginViewController', function () {
  var $rootScope, ctrl, $scope, $controller, $state;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$state_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  beforeEach(function () {
    $scope = $rootScope.$new();

    spyOn($state, 'go');

    ctrl = $controller('UserProfileViewController', {
    }, true);

    ctrl = ctrl();
  });
  describe('LogOut', function () {
    it('change state to login after logout click', function () {
      ctrl.logOut();
      expect($state.go).toHaveBeenCalledWith('login');
    });
  });
});
