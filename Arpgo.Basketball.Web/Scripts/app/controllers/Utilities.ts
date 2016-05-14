module Arpgo.Controllers {
    export class Utilities {
        Scope: any;
        DropDownService: angular.resource.IResourceClass<angular.resource.IResource<any>>;
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
                    if (this.Scope.form == null) return;
                    this.ComputeErrorState(this.Scope.form.Division, newValue);
                });
            this.Scope.$watch(
                "form.Reason.$viewValue.Id",
                (newValue, oldValue) => {
                    if (this.Scope.form == null) return;
                    this.ComputeErrorState(this.Scope.form.Reason, newValue);
                });
            this.Scope.$watch(
                "form.State.$viewValue.Id",
                (newValue, oldValue) => {
                    if (this.Scope.form == null) return;
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
}