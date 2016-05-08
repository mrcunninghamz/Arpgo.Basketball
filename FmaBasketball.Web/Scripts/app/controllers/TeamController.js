/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
var Fma;
(function (Fma) {
    var Controllers;
    (function (Controllers) {
        var RegisterTeamController = (function () {
            function RegisterTeamController($scope, divisionService) {
                var _this = this;
                this.computeErrorState = function (formField, newValue) {
                    if (newValue === "") {
                        formField.$error.required = true;
                        formField.$invalid = true;
                    }
                };
                this.initiateDropDowns = function () {
                    _this.DropDownService.get({ type: "Divisions" }, function (response) {
                        response.Data.unshift(_this.Scope.Model.SelectedDivision);
                        _this.Scope.Divisions = response.Data;
                    });
                    _this.DropDownService.get({ type: "Reasons" }, function (response) {
                        response.Data.unshift(_this.Scope.Model.SelectedReason);
                        _this.Scope.Reasons = response.Data;
                    });
                    _this.DropDownService.get({ type: "States" }, function (response) {
                        response.Data.unshift(_this.Scope.Model.SelectedState);
                        _this.Scope.States = response.Data;
                    });
                };
                this.initiateWatches = function () {
                    _this.Scope.$watch("Model.SelectedDivision", function (newValue, oldValue) {
                        if (newValue != oldValue) {
                            _this.Scope.Model.Division = newValue.Id;
                            switch (newValue.Id) {
                                case 1:
                                    _this.DropDownService.get({ type: "AReasons" }, function (response) {
                                        _this.Scope.Model.SelectedReason = { Id: "", Label: "Select A Reason" };
                                        response.Data.unshift(_this.Scope.Model.SelectedReason);
                                        _this.Scope.Reasons = response.Data;
                                    });
                                    break;
                                case 2:
                                    _this.DropDownService.get({ type: "BReasons" }, function (response) {
                                        _this.Scope.Model.SelectedReason = { Id: "", Label: "Select A Reason" };
                                        response.Data.unshift(_this.Scope.Model.SelectedReason);
                                        _this.Scope.Reasons = response.Data;
                                        _this.Scope.Model.Reason = null;
                                    });
                                    break;
                                default:
                            }
                        }
                    });
                    _this.Scope.$watch("form.Division.$viewValue.Id", function (newValue, oldValue) {
                        _this.computeErrorState(_this.Scope.form.Division, newValue);
                    });
                    _this.Scope.$watch("Model.SelectedReason", function (newValue, oldValue) {
                        if (newValue != oldValue) {
                            _this.Scope.Model.Reason = newValue.Id;
                        }
                    });
                    _this.Scope.$watch("form.Reason.$viewValue.Id", function (newValue, oldValue) {
                        _this.computeErrorState(_this.Scope.form.Reason, newValue);
                    });
                    _this.Scope.$watch("Model.SelectedState", function (newValue, oldValue) {
                        if (newValue != oldValue) {
                            _this.Scope.Model.State = newValue.Id;
                        }
                    });
                    _this.Scope.$watch("form.State.$viewValue.Id", function (newValue, oldValue) {
                        _this.computeErrorState(_this.Scope.form.State, newValue);
                    });
                };
                this.Scope = $scope;
                this.Scope.Model = new Fma.Models.Team();
                this.DropDownService = divisionService;
                this.initiateDropDowns();
                this.initiateWatches();
                this.Scope.Update = function (team) {
                    _this.Scope.$broadcast("show-errors-check-validity");
                    if (_this.Scope.form.$valid) {
                    }
                };
                this.Scope.Reset = function (form) {
                    $scope.$broadcast("show-errors-reset");
                    if (form) {
                        form.$setPristine();
                        form.$setUntouched();
                    }
                };
            }
            RegisterTeamController.$inject = ["$scope", "DropDownService"];
            return RegisterTeamController;
        })();
        Controllers.RegisterTeamController = RegisterTeamController;
        angular.element(document)
            .ready(function () {
            angular.module("fmaBasketballApp").controller("RegisterTeamController", RegisterTeamController);
        });
    })(Controllers = Fma.Controllers || (Fma.Controllers = {}));
})(Fma || (Fma = {}));
var Fma;
(function (Fma) {
    var Services;
    (function (Services) {
        angular.element(document)
            .ready(function () {
            angular.module("Services", ["ngResource"]).factory("DropDownService", Fma.Services.DropDownFactory);
        });
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=TeamController.js.map