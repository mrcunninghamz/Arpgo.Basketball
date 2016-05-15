module Arpgo.Controllers {
    export class TeamPlayersController {
        static $inject = ["$scope", "$state", "TeamPlayerService", "PlayerService", "TeamDataService", "PopupService"];

        Scope: Controllers.IAddPlayerTeamScope;
        State: any;
        TeamPlayerService: any;
        PlayerService: any;
        TeamDataService: Controllers.ITeamDataService;
        PopupService: any;

        constructor($scope: IAddPlayerTeamScope, $state: any, teamPlayerService: any, playerService: any, teamDataService: Controllers.ITeamDataService, popupService: any) {
            this.Scope = $scope;
            this.State = $state;
            this.TeamPlayerService = teamPlayerService;
            this.PlayerService = playerService;
            this.TeamDataService = teamDataService;
            
            this.Scope.Player = this.PlayerService.get({ id: this.Scope.Player != null ? this.Scope.Player.Data.Id : null  }, (response) => {
                this.Scope.Player.Data = response.Data;
            });

            this.Scope.Players = this.TeamPlayerService.get((response) => {
                 this.Scope.Players.Data = response.Data;
            });

            var state = this.State;
            var scope = this.Scope;
            this.Scope.add = (player: Models.Player) => {
                this.Scope.$broadcast("show-errors-check-validity");
                if (this.Scope.form.$valid) {

                    this.Scope.Player.$save(() => {
                        $("#addPlayer").modal("hide");

                        this.Scope.reset();
                        this.Scope.Players = this.TeamPlayerService.get(response => {
                            scope.Players.Data = response.Data;
                        });
                    },(data) => {
                        var test = '';
                    });
                }

            }

            this.Scope.reset = () => {
                this.Scope.$broadcast("show-errors-reset");
                if (this.Scope.form) {
                    this.Scope.form.$setPristine();
                    this.Scope.form.$setUntouched();
                }

                this.Scope.Player.Data = new Models.Player();
                
            }

            this.Scope.delete = (player: Models.Player) => {
                if (popupService.showPopup("Are you sure you want to delete this player?")) {
                    this.Scope.Player.$delete({ id: player.Id }, () => {
                        this.Scope.Players = this.TeamPlayerService.get(response => {
                            scope.Players.Data = response.Data;
                        });
                    }, (data) => {
                        var test = '';
                    });
                }
            }

            this.Scope.UpdateTeamId = () =>
            {
                this.Scope.Player.Data.Team_Id = this.TeamDataService.GetTeam().Id;
            }

        }

    }
}