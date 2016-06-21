angular
    .module('Authentication', [])
    .service('authentication', Authentication);


function Authentication() {
    function checkAuthentication() {
        return true;
    }

    return {
        checkAuthentication: checkAuthentication
    };
}