var Arpgo;
(function (Arpgo) {
    var BasketballApp = (function () {
        function BasketballApp() {
            angular.module("BasketballApp", ["ui.router", "ngSanitize", "ui.bootstrap", "ui.bootstrap.showErrors", "Services"]);
            angular.module("Services", ["ngResource"])
                .factory("TeamService", Arpgo.Services.TeamFactory)
                .factory("TeamPlayerService", Arpgo.Services.TeamPlayerFactory)
                .factory("DropDownService", Arpgo.Services.DropDownFactory);
            angular.module("BasketballApp")
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
                });
                //.state("EditTeam",
                //{ 
                //    views: {
                //        "TeamInfo": {
                //            url: "/Edit",
                //            templateUrl: "templates/EditTeam",
                //            controller: "ManageTeamController"
                //        }
                //    }
                //});
            });
        }
        return BasketballApp;
    }());
    Arpgo.BasketballApp = BasketballApp;
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=BasketballApp.js.map