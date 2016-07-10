/**
 * @ngdoc service
 * @name Authentication
 * @description
 * Works with user authentication
 * @author Dmytro Sopin
 */
(function () {
  'use strict';

  angular
    .module('authentication')
    .service('Authentication', Authentication);

  Authentication.$inject = ['$http'];

  function Authentication ($http) {
    var loginState = {
      isAuthenticated: false,
      userName: ''
    };

    /**
     * @ngdoc method
     * @name checkAuthentication
     * @methodOf Authentication
     * @description
     * Get current authentication state
     * @returns {object} current authentication state
     */
    function checkAuthentication () {
      return loginState;
    }

    /**
     * @ngdoc method
     * @name checkAuthentication
     * @methodOf Authentication
     * @param {bool} authentication state
     * @param {string} user login
     * @description
     * Set authentication information
     */
    function setAuthentication (state, userName) {
      loginState.isAuthenticated = state;
      loginState.userName = userName;
    }

    /**
     * @ngdoc method
     * @name checkAuthentication
     * @methodOf Authentication
     * @param {string} user login
     * @param {string} user password
     * @description
     * Authenticate on site
     * @returns {object} Promise with authentication result
     */
    function authorize (username, password) {
      return $http.post('checkAuth/', {username: username, password: password});
    }

    return {
      checkAuthentication: checkAuthentication,
      authorize: authorize,
      setAuthentication: setAuthentication
    };
  }
}());

