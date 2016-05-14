module Arpgo.Controllers {
    export class ManageTeamController implements IManageTeam {
        static $inject = ["$scope", "$state", "DropDownService", "TeamService"];

        Scope: any;
        PasswordRegex: string;
        State: any;
        TeamService: angular.resource.IResourceClass<angular.resource.IResource<any>>;

        constructor($scope: IRegisterTeamScope, $state: any, divisionService: any, teamService: any) {
            this.Scope = $scope;
            this.State = $state;
            this.TeamService = teamService;

            this.TeamService.get((response) => {
                this.Scope.Model = response.Data;
            });

            const utilities = new Utilities(this.Scope, divisionService);
            utilities.InitiateDropDowns();
            utilities.InitiateWatches();

            this.Scope.edit = () => {
                this.State.go("EditTeam");
            }

            var state = this.State;
            this.Scope.update = () => {
                this.Scope.Model.$update(() => {
                    state.go("Team");
                });
            }
        }

    }
}