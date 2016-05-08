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
        var TeamFactory = (function () {
            function TeamFactory($resource) {
                return $resource("/api/Team/:id");
            }
            TeamFactory.$inject = ["$resource"];
            return TeamFactory;
        }());
        Services.TeamFactory = TeamFactory;
        angular.element(document)
            .ready(function () {
            var services = angular.module("Services", ["ngResource"]);
            services.factory("DropDownService", DropDownFactory);
            services.factory("TeamService", TeamFactory);
        });
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=DropDownFactory.js.map