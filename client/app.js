angular.module('Instagram',['ngRoute','ngMessages','satellizer'])
    .config(config);

function config($routeProvider,$authProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html',
            controller: 'Home',
            controllerAs: 'home' 
        })
        .when('/login',{
            templateUrl: 'views/login.html'
            //controller: 'Login'
        })
        .when('/signup',{
            templateUrl: 'views/signup.html',
            //controller: 'Signup' 
        })
        .when('/photo/:id',{
            templateUrl: 'views/detail.html',
            //controller: 'Detail' 
        })
        .otherwise('/');
    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
    $authProvider.oauth2({
        name: 'instagram',
        url: "http://localhost:3000/auth/instagram",
        redirectUri: 'http://localhost:8000',
        clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
        requiredUrlParams: ['scope'],
  scope: ['likes'],
  scopeDelimiter: '+',
  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    })
}
