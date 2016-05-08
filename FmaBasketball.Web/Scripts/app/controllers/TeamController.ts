/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Fma.Controllers {
    import ngr = angular.resource;
    export class RegisterTeamController {
        static $inject = ["$scope", "DropDownService"];
        
        Scope: any;
        DropDownService: ngr.IResourceClass<ngr.IResource<any>>

        constructor($scope: ng.IScope, divisionService: any) {
            this.Scope = $scope;
            this.Scope.Model = new Models.Team();
            this.DropDownService = divisionService;

            this.initiateDropDowns();
            this.initiateWatches();

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
        }
        
        computeErrorState = (formField: any, newValue: any) => {
            if (newValue === "") {
                formField.$error.required = true;
                formField.$invalid = true;
            }
        }

        initiateDropDowns = () =>{
            this.DropDownService.get({ type: "Divisions" }, (response) => {
                response.Data.unshift(this.Scope.Model.SelectedDivision);
                this.Scope.Divisions = response.Data;
            });

            this.DropDownService.get({ type: "Reasons" }, (response) => {
                response.Data.unshift(this.Scope.Model.SelectedReason);
                this.Scope.Reasons = response.Data;
            });

            this.DropDownService.get({ type: "States" }, (response) => {
                response.Data.unshift(this.Scope.Model.SelectedState);
                this.Scope.States = response.Data;
            });
        }

        initiateWatches = () => {
            this.Scope.$watch(
                "Model.SelectedDivision",
                (newValue, oldValue) => {
                    if (newValue != oldValue) {
                        this.Scope.Model.Division = newValue.Id;

                        switch (newValue.Id) {
                            case 1:
                                this.DropDownService.get({ type: "AReasons" }, (response) => {
                                    this.Scope.Model.SelectedReason = { Id: "", Label: "Select A Reason" }
                                    response.Data.unshift(this.Scope.Model.SelectedReason);
                                    this.Scope.Reasons = response.Data;
                                });
                                break;
                            case 2:
                                this.DropDownService.get({ type: "BReasons" }, (response) => {
                                    this.Scope.Model.SelectedReason = { Id: "", Label: "Select A Reason" }
                                    response.Data.unshift(this.Scope.Model.SelectedReason);
                                    this.Scope.Reasons = response.Data;
                                    this.Scope.Model.Reason = null;
                                });
                                break;
                            default:
                        }
                    }
                });
            this.Scope.$watch(
                "form.Division.$viewValue.Id",
                (newValue, oldValue) => {
                    this.computeErrorState(this.Scope.form.Division, newValue);
                });

            this.Scope.$watch(
                "Model.SelectedReason",
                (newValue, oldValue) => {
                    if (newValue != oldValue) {
                        this.Scope.Model.Reason = newValue.Id;
                    }
                });
            this.Scope.$watch(
                "form.Reason.$viewValue.Id",
                (newValue, oldValue) => {
                    this.computeErrorState(this.Scope.form.Reason, newValue);
                });

            this.Scope.$watch(
                "Model.SelectedState",
                (newValue, oldValue) => {
                    if (newValue != oldValue) {
                        this.Scope.Model.State = newValue.Id;
                    }
                });
            this.Scope.$watch(
                "form.State.$viewValue.Id",
                (newValue, oldValue) => {
                    this.computeErrorState(this.Scope.form.State, newValue);
                });
        }
    }

    angular.element(document)
        .ready(() => {
            angular.module("fmaBasketballApp").controller("RegisterTeamController", RegisterTeamController);

        });
}

module Fma.Services {
    angular.element(document)
        .ready(() => {
            angular.module("Services", ["ngResource"]).factory("DropDownService", Fma.Services.DropDownFactory);

        });
}
