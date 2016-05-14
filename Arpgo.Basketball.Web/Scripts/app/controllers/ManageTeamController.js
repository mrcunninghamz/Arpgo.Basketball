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
                var utilities = new Controllers.Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.edit = function () {
                    _this.State.go("EditTeam");
                };
            }
            ManageTeamController.$inject = ["$scope", "$state", "DropDownService", "TeamService"];
            return ManageTeamController;
        }());
        Controllers.ManageTeamController = ManageTeamController;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=ManageTeamController.js.map