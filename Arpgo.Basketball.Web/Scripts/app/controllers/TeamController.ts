/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Fma.Controllers {
    import ngr = angular.resource;
    
    export class ManageTeamController implements IManageTeam {
        static $inject = ["$scope", "$window", "DropDownService", "TeamService"];

        Scope: any;
        PasswordRegex: string;
        Window: ng.IWindowService;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;

        constructor($scope: IRegisterTeamScope, $window: ng.IWindowService, divisionService: any, teamService: any) {
            this.Scope = $scope;
            this.Window = $window;
            this.TeamService = teamService;

            const utilities = new Utilities(this.Scope, divisionService);
            utilities.InitiateDropDowns();
            utilities.InitiateWatches();

            this.Scope.Model = this.TeamService.get();
        }

    }

    export class RegisterTeamController implements IManageTeam {
        static $inject = ["$scope", "$window", "DropDownService", "TeamService"];
        
        Scope: any;
        PasswordRegex: string;
        Window: ng.IWindowService;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;

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

    export interface IRegisterTeamScope extends ITeamScope {
        PasswordRegex: string;
        save(team: Models.ITeam): void;
    }

    export interface ITeamScope extends ng.IScope {
        Model: any;
    }

    export interface IManageTeam {
        Scope: any;
        PasswordRegex: string;
        Window: ng.IWindowService;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;
    }

    export class Constants {
        static passwordRegex = "^(?=.*\\d)(?=.*[A-Z])(.){6,100}$";
    }

    export class Utilities {
        Scope: any;
        DropDownService: ngr.IResourceClass<ngr.IResource<any>>;
        constructor($scope: any, divisionService: any) {
            this.Scope = $scope;
            this.DropDownService = divisionService;
        }

        InitiateDropDowns = () => {
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
            angular.module("BasketballApp")
                .controller("RegisterTeamController", RegisterTeamController)
                .controller("ManageTeamController", ManageTeamController);

        });
}