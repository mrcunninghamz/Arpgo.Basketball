module Arpgo.Controllers {
    export class TeamPlayersController {
        static $inject = ["$scope", "$state", "TeamPlayerService"];

        Scope: Controllers.IRegisterTeamScope;
        State: any;
        TeamPlayerService: any;

        constructor($scope: IRegisterTeamScope, $state: any, teamPlayerService: any) {
            this.Scope = $scope;
            this.State = $state;
            this.TeamPlayerService = teamPlayerService;

             this.TeamPlayerService.get((response) => {
                 this.Scope.Model = response.Data;
                 var test = "";
             });
        }

    }
}