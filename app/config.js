require.config({
    baseUrl: '.',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'jquery': 'bower_components/jquery/dist/jquery',
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-ui-router': {
            'deps': ['angular'],
        },
        'jquery': {
            'exports': '$'
        },
    }
});
require(["angular", "app"], function (angular, app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app["name"]]);
    });
});
//# sourceMappingURL=config.js.map