/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var Fma;
(function (Fma) {
    var Main = (function () {
        function Main() {
            var BasketballApp = new BasketballApp();
            angular.element(document)
                .ready(function () {
                angular.bootstrap(document, ["BasketballApp"]);
            });
        }
        return Main;
    }());
    var main = new Main();
})(Fma || (Fma = {}));
//# sourceMappingURL=Main.js.map