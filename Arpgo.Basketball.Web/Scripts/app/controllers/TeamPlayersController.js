var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var TeamPlayersController = (function () {
            function TeamPlayersController($scope, $state, teamPlayerService) {
                var _this = this;
                this.Scope = $scope;
                this.State = $state;
                this.TeamPlayerService = teamPlayerService;
                this.TeamPlayerService.get(function (response) {
                    _this.Scope.Model = response.Data;
                    var test = "";
                });
            }
            TeamPlayersController.$inject = ["$scope", "$state", "TeamPlayerService"];
            return TeamPlayersController;
        }());
        Controllers.TeamPlayersController = TeamPlayersController;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=TeamPlayersController.js.map