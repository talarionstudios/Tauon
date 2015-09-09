///<amd-dependency path="angular-ui-router" />
///<amd-dependency path="angular-breadcrumb" />

import angular = require("angular");
import StateController1 = require("controllers/StateController1");
import StateController2 = require("controllers/StateController2");


var app = angular.module("test", ['ui.router', 'ncy-angular-breadcrumb']);

app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) =>
{
    $stateProvider.state('state1', {
        url: '/state1',
        controller: 'state1',
        templateUrl:'html/StateView1.html',
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

export = app;


