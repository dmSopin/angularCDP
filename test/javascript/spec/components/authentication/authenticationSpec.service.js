describe('Authentication', function () {
    beforeEach(module('Authentication'));

    var authenticationService;

    beforeEach(inject(function (authentication) {
        authenticationService = authentication;
    }));

    it('Should reverse a string', function () {
        expect(authenticationService.checkAuthentication()).toBe(true);
    });
});