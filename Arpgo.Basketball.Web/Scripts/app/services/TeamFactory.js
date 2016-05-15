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
        var PlayerFactory = (function () {
            function PlayerFactory($resource) {
                return $resource("/api/Player/:id", { id: "@_id" }, {
                    update: {
                        method: "PUT"
                    }
                });
            }
            PlayerFactory.$inject = ["$resource"];
            return PlayerFactory;
        }());
        Services.PlayerFactory = PlayerFactory;
        var TeamDataService = (function () {
            function TeamDataService() {
                var _this = this;
                this.SetTeam = function (team) {
                    _this.Team = team;
                };
                this.GetTeam = function () {
                    return _this.Team;
                };
            }
            return TeamDataService;
        }());
        Services.TeamDataService = TeamDataService;
    })(Services = Arpgo.Services || (Arpgo.Services = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=TeamFactory.js.map