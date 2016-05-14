/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
module Arpgo {
    class Main
    {
        constructor() {
            const BasketballApp = new Arpgo.BasketballApp();

            angular.element(document)
                .ready(() => {
                    angular.bootstrap(document, ["BasketballApp"]);
                });
        }
    }

    var main = new Main();
}