/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
module Fma {
    class Main
    {
        constructor() {
            var fmaBasketballApp = new BasketballApp();

            angular.element(document)
                .ready(() => {
                    angular.bootstrap(document, ["fmaBasketballApp"]);
                });
        }
    }

    var main = new Main();
}