var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var RegisterTeamController = (function () {
            function RegisterTeamController($scope, $window, divisionService, teamService) {
                var _this = this;
                this.Scope = $scope;
                this.Window = $window;
                this.TeamService = teamService;
                this.Scope.PasswordRegex = Controllers.Constants.passwordRegex;
                this.Scope.Model = new Arpgo.Models.CreateTeam();
                var utilities = new Controllers.Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.save = function (team) {
                    _this.Scope.$broadcast("show-errors-check-validity");
                    if (_this.Scope.form.$valid) {
                        _this.TeamService.save(_this.Scope.Model, function () {
                            _this.Window.location.href = "/Team/Register/Thanks";
                        });
                    }
                };
                //this.Scope.Reset = form => {
                //    $scope.$broadcast("show-errors-reset");
                //    if (form) {
                //        form.$setPristine();
                //        form.$setUntouched();
                //    }
                //}
            }
            RegisterTeamController.$inject = ["$scope", "$window", "DropDownService", "TeamService"];
            return RegisterTeamController;
        }());
        Controllers.RegisterTeamController = RegisterTeamController;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=RegisterTeamController.js.map