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

            this.Scope.Model = this.TeamService.get();
            this.State.go("Team");

            const utilities = new Utilities(this.Scope, divisionService);
            utilities.InitiateDropDowns();
            utilities.InitiateWatches();

            this.Scope.edit = () => {
                this.State.go("EditTeam");
            }
        }

    }
    angular.element(document)
        .ready(() => {
            angular.module("BasketballApp")
                .controller("ManageTeamController", ManageTeamController)
                .config(function($stateProvider) {
                    $stateProvider.state("Team",
                        { // state for showing all movies
                            url: "/View",
                            templateUrl: "templates/ViewTeam",
                            controller: "ManageTeamController"
                        })
                        .state("EditTeam",
                        { // state for showing all movies
                            url: "/Edit",
                            templateUrl: "templates/EditTeam",
                            controller: "ManageTeamController"
                        });
                });
        });
}