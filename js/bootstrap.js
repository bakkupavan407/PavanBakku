define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, angular) {
    require(['jquery'], function($) {
    	angular.bootstrap(document, ['app']);
    });
});
