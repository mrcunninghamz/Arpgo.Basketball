/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var Arpgo;
(function (Arpgo) {
    var Main = (function () {
        function Main() {
            var BasketballApp = new Arpgo.BasketballApp();
            angular.element(document)
                .ready(function () {
                angular.bootstrap(document, ["BasketballApp"]);
            });
        }
        return Main;
    }());
    var main = new Main();
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=Main.js.map