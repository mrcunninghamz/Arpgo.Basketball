define(["require", "exports"], function (require, exports) {
    "use strict";
    var Controllers = (function () {
        function Controllers() {
            var app = angular.module("controllers", []);
            app.controller("homeController", function ($scope, $location) {
                $scope.name = "John";
                $scope.lastName = "Doe";
            });
        }
        return Controllers;
    }());
    exports.Controllers = Controllers;
});
//# sourceMappingURL=controllers.js.map