define([
    'angular',
    'uiRouter',
    './services/loadServices',
    './controllers/loadControllers'
], function(angular) {
    'use strict';

    return angular.module('app', ['app.services', 'app.controllers', 'ui.router']);
});
