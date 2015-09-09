///<amd-dependency path="angular-ui-router" />
///<amd-dependency path="angular-breadcrumb" />
define(["require", "exports", "angular", "controllers/StateController1", "controllers/StateController2", "angular-ui-router", "angular-breadcrumb"], function (require, exports, angular, StateController1, StateController2) {
    var app = angular.module("test", ['ui.router', 'ncy-angular-breadcrumb']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('state1', {
            url: '/state1',
            controller: 'state1',
            templateUrl: 'html/StateView1.html',
            ncyBreadcrumb: {
                label: 'State 1'
            }
        });
        $stateProvider.state('state2', {
            url: '/state2',
            controller: 'state2',
            templateUrl: 'html/StateView2.html',
            ncyBreadcrumb: {
                label: 'State 2',
            }
        });
        $urlRouterProvider.otherwise("/test/");
    });
    app.controller("state1", StateController1);
    app.controller("state2", StateController2);
    return app;
});
//# sourceMappingURL=app.js.map