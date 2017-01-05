define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('home', {
        	url: '/',
            templateUrl: 'views/homeView.html',
            controller: 'LoginCtrl'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'registerCtrl'
        })

        .state('forgotpassword', {
            url: '/forgotpassword',
            templateUrl: 'views/forgotpwd.html',
            controller: 'forgotPwdCtrl'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'
        })

        $urlRouterProvider.otherwise("/");
    });
});
