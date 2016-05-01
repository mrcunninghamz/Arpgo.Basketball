define(["require", "exports", "controllers"], function (require, exports, controllers) {
    "use strict";
    var FmaBasketballApp = (function () {
        function FmaBasketballApp() {
            var ngApp = angular.module("fmaBasketballApp", ["ngRoute", "ngSanitize", "ui.bootstrap", "controllers"]);
            var appControllers = new controllers.Controllers();
        }
        return FmaBasketballApp;
    }());
    exports.FmaBasketballApp = FmaBasketballApp;
});
//# sourceMappingURL=app.js.map