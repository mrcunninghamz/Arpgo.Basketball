/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var Fma;
(function (Fma) {
    var Main = (function () {
        function Main() {
            var fmaBasketballApp = new Fma.BasketballApp();
            angular.element(document)
                .ready(function () {
                angular.bootstrap(document, ["fmaBasketballApp"]);
            });
        }
        return Main;
    }());
    var main = new Main();
})(Fma || (Fma = {}));
//# sourceMappingURL=Main.js.map