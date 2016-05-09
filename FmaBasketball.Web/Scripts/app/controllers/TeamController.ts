/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Fma.Controllers {
    import ngr = angular.resource;
    export class RegisterTeamController {
        static $inject = ["$scope", "$window", "DropDownService", "TeamService"];
        
        Scope: any;
        Window: ng.IWindowService;
        DropDownService: ngr.IResourceClass<ngr.IResource<any>>;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;

        constructor($scope: ng.IScope, $window: ng.IWindowService, divisionService: any, teamService: any) {
            this.Scope = $scope;
            this.Window = $window;
            this.DropDownService = divisionService;
            this.TeamService = teamService;

            this.Scope.Model = new Models.Team();

            this.InitiateDropDowns();
            this.InitiateWatches();

            this.Scope.Update = (team: Models.ITeam) => {
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

        InitiateDropDowns = () =>{
            this.DropDownService.get({ type: "Divisions" }, (response) => {
                this.Scope.Divisions = response.Data;
            });

            this.DropDownService.get({ type: "Reasons" }, (response) => {
                this.Scope.Reasons = response.Data;
            });

            this.DropDownService.get({ type: "States" }, (response) => {
                this.Scope.States = response.Data;
            });
        }

        InitiateWatches = () => {
            this.Scope.$watch(
                "Model.Division.Id",
                (newValue, oldValue) => {
                    if (newValue != oldValue) {
                        switch (newValue) {
                            case "1":
                                this.DropDownService.get({ type: "AReasons" }, (response) => {
                                   this.Scope.Reasons = response.Data;
                                });
                                break;
                            case "2":
                                this.DropDownService.get({ type: "BReasons" }, (response) => {
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
                    this.ComputeErrorState(this.Scope.form.Division, newValue);
                });
            this.Scope.$watch(
                "form.Reason.$viewValue.Id",
                (newValue, oldValue) => {
                    this.ComputeErrorState(this.Scope.form.Reason, newValue);
                });
            this.Scope.$watch(
                "form.State.$viewValue.Id",
                (newValue, oldValue) => {
                    this.ComputeErrorState(this.Scope.form.State, newValue);
                });
        }

        ComputeErrorState = (formField: any, newValue: any) => {
            if (newValue === "") {
                formField.$error.required = true;
                formField.$invalid = true;
                this.Scope.form.$invalid = true;
            }
        }
    }

    angular.element(document)
        .ready(() => {
            angular.module("fmaBasketballApp").controller("RegisterTeamController", RegisterTeamController);

        });
}