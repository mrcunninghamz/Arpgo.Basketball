var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var ManageTeamController = (function () {
            function ManageTeamController($scope, $state, divisionService, teamService) {
                var _this = this;
                this.Scope = $scope;
                this.State = $state;
                this.TeamService = teamService;
                this.Scope.Model = this.TeamService.get();
                this.State.go("Team");
                var utilities = new Controllers.Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.edit = function () {
                    _this.State.go("EditTeam");
                };
            }
            ManageTeamController.$inject = ["$scope", "$state", "DropDownService", "TeamService"];
            return ManageTeamController;
        })();
        Controllers.ManageTeamController = ManageTeamController;
        angular.element(document)
            .ready(function () {
            angular.module("BasketballApp")
                .controller("ManageTeamController", ManageTeamController)
                .config(function ($stateProvider) {
                $stateProvider.state("Team", {
                    url: "/View",
                    templateUrl: "templates/ViewTeam",
                    controller: "ManageTeamController"
                })
                    .state("EditTeam", {
                    url: "/Edit",
                    templateUrl: "templates/EditTeam",
                    controller: "ManageTeamController"
                });
            });
        });
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=ManageTeamController.js.map