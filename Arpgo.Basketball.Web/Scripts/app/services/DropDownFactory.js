var Fma;
(function (Fma) {
    var Services;
    (function (Services) {
        var DropDownFactory = (function () {
            function DropDownFactory($resource) {
                return $resource("/api/Utility/GetType");
            }
            DropDownFactory.$inject = ["$resource"];
            return DropDownFactory;
        }());
        Services.DropDownFactory = DropDownFactory;
        angular.element(document)
            .ready(function () {
            var services = angular.module("Services", ["ngResource"]);
            services.factory("DropDownService", DropDownFactory);
            services.factory("TeamService", Services.TeamFactory);
        });
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=DropDownFactory.js.map