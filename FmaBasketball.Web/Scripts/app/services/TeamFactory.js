var Fma;
(function (Fma) {
    var Services;
    (function (Services) {
        var TeamFactory = (function () {
            function TeamFactory($resource) {
                return $resource("/api/Team/:id", { id: "@_id" }, {
                    update: {
                        method: "PUT"
                    }
                });
            }
            TeamFactory.$inject = ["$resource"];
            return TeamFactory;
        }());
        Services.TeamFactory = TeamFactory;
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=TeamFactory.js.map