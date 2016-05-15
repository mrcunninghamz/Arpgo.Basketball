module Arpgo.Controllers {
    export class ManageTeamController implements IManageTeam {
        static $inject = ["$scope", "$state", "DropDownService", "TeamService", "TeamDataService"];

        Scope: IManageTeamScope;
        PasswordRegex: string;
        State: any;
        TeamService: any;
        TeamDataService: Controllers.ITeamDataService;

        constructor($scope: IManageTeamScope, $state: any, divisionService: any, teamService: any, teamDataService: Controllers.ITeamDataService) {
            this.Scope = $scope;
            this.State = $state;
            this.TeamService = teamService;
            this.TeamDataService = teamDataService;

            this.Scope.Team = this.TeamService.get((response) => {
                this.Scope.Team.Data = response.Data;
                this.TeamDataService.SetTeam(this.Scope.Team.Data);
            });

            const utilities = new Utilities(this.Scope, divisionService);
            utilities.InitiateDropDowns();
            utilities.InitiateWatches();

            this.Scope.edit = () => {
                this.State.go("EditTeam");
            }

            var state = this.State;
            this.Scope.update = () => {
                this.Scope.Team.$update(() => {
                    state.go("Team");
                });
            }
        }

    }
}