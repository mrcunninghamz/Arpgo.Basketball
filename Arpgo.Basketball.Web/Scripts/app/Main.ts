/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
module Fma {
    class Main
    {
        constructor() {
            var BasketballApp = new BasketballApp();

            angular.element(document)
                .ready(() => {
                    angular.bootstrap(document, ["BasketballApp"]);
                });
        }
    }

    var main = new Main();
}