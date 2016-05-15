var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var TeamPlayersController = (function () {
            function TeamPlayersController($scope, $state, teamPlayerService, playerService, teamDataService, popupService) {
                var _this = this;
                this.Scope = $scope;
                this.State = $state;
                this.TeamPlayerService = teamPlayerService;
                this.PlayerService = playerService;
                this.TeamDataService = teamDataService;
                this.Scope.Player = this.PlayerService.get({ id: this.Scope.Player != null ? this.Scope.Player.Data.Id : null }, function (response) {
                    _this.Scope.Player.Data = response.Data;
                });
                this.Scope.Players = this.TeamPlayerService.get(function (response) {
                    _this.Scope.Players.Data = response.Data;
                });
                var state = this.State;
                var scope = this.Scope;
                this.Scope.add = function (player) {
                    _this.Scope.$broadcast("show-errors-check-validity");
                    if (_this.Scope.form.$valid) {
                        _this.Scope.Player.$save(function () {
                            $("#addPlayer").modal("hide");
                            _this.Scope.reset();
                            _this.Scope.Players = _this.TeamPlayerService.get(function (response) {
                                scope.Players.Data = response.Data;
                            });
                        }, function (data) {
                            var test = '';
                        });
                    }
                };
                this.Scope.reset = function () {
                    _this.Scope.$broadcast("show-errors-reset");
                    if (_this.Scope.form) {
                        _this.Scope.form.$setPristine();
                        _this.Scope.form.$setUntouched();
                    }
                    _this.Scope.Player.Data = new Arpgo.Models.Player();
                };
                this.Scope.delete = function (player) {
                    if (popupService.showPopup("Are you sure you want to delete this player?")) {
                        _this.Scope.Player.$delete({ id: player.Id }, function () {
                            _this.Scope.Players = _this.TeamPlayerService.get(function (response) {
                                scope.Players.Data = response.Data;
                            });
                        }, function (data) {
                            var test = '';
                        });
                    }
                };
                this.Scope.UpdateTeamId = function () {
                    _this.Scope.Player.Data.Team_Id = _this.TeamDataService.GetTeam().Id;
                };
            }
            TeamPlayersController.$inject = ["$scope", "$state", "TeamPlayerService", "PlayerService", "TeamDataService", "PopupService"];
            return TeamPlayersController;
        }());
        Controllers.TeamPlayersController = TeamPlayersController;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=TeamPlayersController.js.map