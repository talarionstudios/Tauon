require.config({
    baseUrl: '.',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-breadcrumb': 'bower_components/angular-breadcrumb/release/angular-breadcrumb.min',
        'jquery': 'bower_components/jquery/dist/jquery',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'app': 'app/app',
        'test':'app/test'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-ui-router': {
            'deps': ['angular'], 
        },
        'angular-breadcrumb': {
            'deps': ['angular', 'angular-ui-router', 'bootstrap']
        },
        'jquery': {
            'exports': '$'
        },
        'bootstrap': {
            'deps': ['jquery']
        }
    }
});

require(["angular", "app"], function (angular, app)
{
    angular.element(document).ready(() =>
    {
        angular.bootstrap(document, [app["name"]]);
    });
});