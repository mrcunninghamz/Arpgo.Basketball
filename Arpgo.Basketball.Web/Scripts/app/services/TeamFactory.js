var Arpgo;
(function (Arpgo) {
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
        var TeamPlayerFactory = (function () {
            function TeamPlayerFactory($resource) {
                return $resource("/api/TeamPlayers/:id", { id: "@_id" }, {
                    update: {
                        method: "PUT"
                    }
                });
            }
            TeamPlayerFactory.$inject = ["$resource"];
            return TeamPlayerFactory;
        }());
        Services.TeamPlayerFactory = TeamPlayerFactory;
    })(Services = Arpgo.Services || (Arpgo.Services = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=TeamFactory.js.map