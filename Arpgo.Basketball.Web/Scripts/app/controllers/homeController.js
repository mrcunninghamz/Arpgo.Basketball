var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope) {
                this.scope = $scope;
                this.scope.Model = new HomeModel();
            }
            HomeController.$inject = ["$scope"];
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var HomeModel = (function () {
            function HomeModel() {
                this.name = "John";
                this.lastName = "Doe";
            }
            return HomeModel;
        }());
        Controllers.HomeModel = HomeModel;
        angular.element(document)
            .ready(function () {
            angular.module("BasketballApp").controller("HomeController", HomeController);
        });
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=HomeController.js.map