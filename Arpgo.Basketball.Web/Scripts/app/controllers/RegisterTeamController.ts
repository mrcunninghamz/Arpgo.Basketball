module Arpgo.Controllers {
    export class RegisterTeamController implements IRegisterTeam {
        static $inject = ["$scope", "$window", "DropDownService", "TeamService"];
        
        Scope: IRegisterTeamScope;
        PasswordRegex: string;
        Window: ng.IWindowService;
        TeamService: angular.resource.IResourceClass<angular.resource.IResource<any>>;

        constructor($scope: IRegisterTeamScope, $window: ng.IWindowService, divisionService: any, teamService: any) {
            this.Scope = $scope;
            this.Window = $window;
            this.TeamService = teamService;
            this.Scope.PasswordRegex = Constants.passwordRegex;

            this.Scope.Model = new Models.CreateTeam();

            const utilities = new Utilities(this.Scope, divisionService);
            utilities.InitiateDropDowns();
            utilities.InitiateWatches();

            this.Scope.save = (team: Models.ITeam) => {
                this.Scope.$broadcast("show-errors-check-validity");

                if (this.Scope.form.$valid) {
                    this.TeamService.save(this.Scope.Model, () => {
                        this.Window.location.href = "/Team/Register/Thanks";
                    });
                }

            }

            //this.Scope.Reset = form => {
            //    $scope.$broadcast("show-errors-reset");

            //    if (form) {
            //        form.$setPristine();
            //        form.$setUntouched();
            //    }
            //}
        }
    }
}