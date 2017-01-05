require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery-2.1.4.min',
        'jquery-ui': 'lib/jquery-ui-1.12.0.min',
        'require': 'lib/require-2.2.0.min',
        'angular': 'lib/angular-1.5.6.min',
        'uiRouter': 'lib/angular-ui-router'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        }
    },
    deps: [
        './bootstrap'
    ]
});
