angular.module('Instagram',['ngRoute','ngMessages'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html',
            //controller: 'Home' 
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
}
