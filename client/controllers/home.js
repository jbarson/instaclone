angular.module('Instagram')
    .controller('Home', home);

function home(){
    var vm = this;
    vm.isAuthenticated = function(){
        // check if logged in
    };
    vm.linkInstagram = function(){
        // connect email account with instagram
    };
}