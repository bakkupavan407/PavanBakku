define([
    'angular',
    'uiRouter'
], function(angular) {
    'use strict';

    return angular.module('customerModule', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('customer', {
            url: '/customer',
            templateUrl: 'views/customer.html'
        })

        $urlRouterProvider.otherwise("/customer");
    });
});
