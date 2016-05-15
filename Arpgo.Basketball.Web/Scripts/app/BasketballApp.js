var Arpgo;
(function (Arpgo) {
    var CompareTo = Arpgo.Directives.CompareTo;
    var UserCheckExists = Arpgo.Directives.UserCheckExists;
    var PlayerNumberCheckExists = Arpgo.Directives.PlayerNumberCheckExists;
    var BasketballApp = (function () {
        function BasketballApp() {
            angular.module("BasketballApp", ["ui.router", "ngSanitize", "ui.bootstrap", "ui.bootstrap.showErrors", "Services"]);
            angular.module("Services", ["ngResource"])
                .factory("TeamService", Arpgo.Services.TeamFactory)
                .factory("TeamPlayerService", Arpgo.Services.TeamPlayerFactory)
                .factory("PlayerService", Arpgo.Services.PlayerFactory)
                .factory("DropDownService", Arpgo.Services.DropDownFactory)
                .factory("NumberCheckService", Arpgo.Services.NumberCheckFactory)
                .factory("UserCheckService", Arpgo.Services.UserCheckFactory);
            angular.module("Services")
                .service("TeamDataService", Arpgo.Services.TeamDataService).service("PopupService", function ($window) {
                this.showPopup = function (message) { return $window.confirm(message); };
            });
            angular.module("BasketballApp")
                .directive("compareTo", CompareTo.instance)
                .directive("userCheckExists", UserCheckExists.instance)
                .directive("playerNumberCheckExists", PlayerNumberCheckExists.instance)
                .controller("RegisterTeamController", Arpgo.Controllers.RegisterTeamController)
                .controller("ManageTeamController", Arpgo.Controllers.ManageTeamController)
                .controller("TeamPlayersController", Arpgo.Controllers.TeamPlayersController)
                .config(function ($stateProvider) {
                $stateProvider
                    .state("Team", {
                    url: "/TeamInfo",
                    views: {
                        "TeamInfo": {
                            templateUrl: "templates/ViewTeam",
                            controller: "ManageTeamController"
                        },
                        "PlayerInfo": {
                            templateUrl: "templates/ViewPlayers",
                            controller: "ManageTeamController"
                        }
                    }
                })
                    .state("EditTeam", {
                    url: "/EditTeam",
                    views: {
                        "TeamInfo": {
                            templateUrl: "templates/EditTeam",
                            controller: "ManageTeamController"
                        },
                        "PlayerInfo": {
                            templateUrl: "templates/ViewPlayers",
                            controller: "ManageTeamController"
                        }
                    }
                });
            });
        }
        return BasketballApp;
    }());
    Arpgo.BasketballApp = BasketballApp;
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=BasketballApp.js.map