/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Fma.Controllers {
    import ngr = angular.resource;
    export class RegisterTeamController {
        static $inject = ["$scope", "DropDownService"];
        
        Scope: any;
        DropDownService: ngr.IResourceClass<ngr.IResource<any>>;

        constructor($scope: ng.IScope, divisionService: any) {
            this.Scope = $scope;
            this.Scope.Model = new Models.Team();
            this.DropDownService = divisionService;

            this.DropDownService.get({ type: "Divisions" }, (response) => {
                response.Data.unshift(this.Scope.Model.SelectedDivision);
                this.Scope.Divisions = response.Data;
            });

            this.DropDownService.get({ type: "Reasons" }, (response) => {
                response.Data.unshift(this.Scope.Model.SelectedReason);
                this.Scope.Reasons = response.Data;
            });

            this.Scope.Update = (team: Models.ITeam) => {
                this.Scope.$broadcast("show-errors-check-validity");

                if (this.Scope.form.$valid) {
                    // save the user
                }
                
            };

            this.Scope.Reset = form => {
                $scope.$broadcast("show-errors-reset");

                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }
            }

            this.Scope.$watch("Model.SelectedDivision",
                (newValue, oldValue) => {
                    if (newValue != oldValue) {
                        this.Scope.Model.Division = newValue.Id;
                        
                        switch (newValue.Id) {
                            case 1:
                                this.DropDownService.get({ type: "AReasons" }, (response) => {
                                    response.Data.unshift(this.Scope.Model.SelectedReason);
                                    this.Scope.Reasons = response.Data;
                                });
                                break;
                            case 2:
                                this.DropDownService.get({ type: "BReasons" }, (response) => {
                                    response.Data.unshift(this.Scope.Model.SelectedReason);
                                    this.Scope.Reasons = response.Data;
                                });
                                break;
                            default:
                        }
                    }

                    var test = this.Scope.form.Reason;
                });
        }
    }

    angular.element(document)
        .ready(() => {
            angular.module("fmaBasketballApp").controller("RegisterTeamController", RegisterTeamController);

        });
}

module Fma.Services {
    import ng = angular.resource;

    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: ng.IResourceService) {
            return $resource("/api/Team/GetDivisions");
        }
    }

    angular.element(document)
        .ready(() => {
            angular.module("Services", ["ngResource"]).factory("DropDownService", Fma.Services.DropDownFactory);

        });
}
