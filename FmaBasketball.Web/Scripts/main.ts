/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
requirejs.config({
    baseUrl: "Scripts/app",
    paths: {
        "jquery": "../jquery-2.2.3",
        "bootstrap": "../bootstrap",
        "app": "./app",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "ngSanitize": "../angular-sanitize",
        "controllers": "./controllers",
        "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls"
    },
    shim: {
        "ngRoute": ["angular"],
        "ngSanitize": ["angular"],
        "ui.bootstrap": ["angular"],
        "bootstrap": ["jquery"]
    }
});

requirejs(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap"], (app) => {
    var fmaBasketballApp = new app.FmaBasketballApp();

    angular.element(document).ready(() => {
        angular.bootstrap(document, ["fmaBasketballApp"]);
    });
});