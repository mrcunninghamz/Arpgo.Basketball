var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var ManageTeamController = (function () {
            function ManageTeamController($scope, $state, divisionService, teamService, teamDataService) {
                var _this = this;
                this.Scope = $scope;
                this.State = $state;
                this.TeamService = teamService;
                this.TeamDataService = teamDataService;
                this.Scope.Team = this.TeamService.get(function (response) {
                    _this.Scope.Team.Data = response.Data;
                    _this.TeamDataService.SetTeam(_this.Scope.Team.Data);
                });
                var utilities = new Controllers.Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.edit = function () {
                    _this.State.go("EditTeam");
                };
                var state = this.State;
                this.Scope.update = function () {
                    _this.Scope.Team.$update(function () {
                        state.go("Team");
                    });
                };
            }
            ManageTeamController.$inject = ["$scope", "$state", "DropDownService", "TeamService", "TeamDataService"];
            return ManageTeamController;
        }());
        Controllers.ManageTeamController = ManageTeamController;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=ManageTeamController.js.map