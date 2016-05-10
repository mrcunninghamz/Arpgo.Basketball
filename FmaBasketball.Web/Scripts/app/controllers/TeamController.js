/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
var Fma;
(function (Fma) {
    var Controllers;
    (function (Controllers) {
        var RegisterTeamController = (function () {
            function RegisterTeamController($scope, $window, divisionService, teamService) {
                var _this = this;
                this.InitiateDropDowns = function () {
                    _this.DropDownService.get({ type: "Divisions" }, function (response) {
                        _this.Scope.Divisions = response.Data;
                    });
                    _this.DropDownService.get({ type: "Reasons" }, function (response) {
                        _this.Scope.Reasons = response.Data;
                    });
                    _this.DropDownService.get({ type: "States" }, function (response) {
                        _this.Scope.States = response.Data;
                    });
                };
                this.InitiateWatches = function () {
                    _this.Scope.$watch("Model.Division.Id", function (newValue, oldValue) {
                        if (newValue != oldValue) {
                            switch (newValue) {
                                case "1":
                                    _this.DropDownService.get({ type: "AReasons" }, function (response) {
                                        _this.Scope.Reasons = response.Data;
                                    });
                                    break;
                                case "2":
                                    _this.DropDownService.get({ type: "BReasons" }, function (response) {
                                        _this.Scope.Reasons = response.Data;
                                        _this.Scope.Model.Reason = null;
                                    });
                                    break;
                                default:
                            }
                        }
                    });
                    _this.Scope.$watch("form.Division.$viewValue.Id", function (newValue, oldValue) {
                        _this.ComputeErrorState(_this.Scope.form.Division, newValue);
                    });
                    _this.Scope.$watch("form.Reason.$viewValue.Id", function (newValue, oldValue) {
                        _this.ComputeErrorState(_this.Scope.form.Reason, newValue);
                    });
                    _this.Scope.$watch("form.State.$viewValue.Id", function (newValue, oldValue) {
                        _this.ComputeErrorState(_this.Scope.form.State, newValue);
                    });
                };
                this.ComputeErrorState = function (formField, newValue) {
                    if (newValue === "") {
                        formField.$error.required = true;
                        formField.$invalid = true;
                        _this.Scope.form.$invalid = true;
                    }
                };
                this.Scope = $scope;
                this.Window = $window;
                this.DropDownService = divisionService;
                this.TeamService = teamService;
                this.Scope.Model = new Fma.Models.CreateTeam();
                this.InitiateDropDowns();
                this.InitiateWatches();
                this.Scope.update = function (team) {
                    _this.Scope.$broadcast("show-errors-check-validity");
                    if (_this.Scope.form.$valid) {
                        _this.TeamService.save(_this.Scope.Model, function () {
                            _this.Window.location.href = "/Team/Register/Thanks";
                        });
                    }
                };
                //this.Scope.Reset = form => {
                //    $scope.$broadcast("show-errors-reset");
                //    if (form) {
                //        form.$setPristine();
                //        form.$setUntouched();
                //    }
                //}
            }
            RegisterTeamController.$inject = ["$scope", "$window", "DropDownService", "TeamService"];
            return RegisterTeamController;
        }());
        Controllers.RegisterTeamController = RegisterTeamController;
        angular.element(document)
            .ready(function () {
            angular.module("fmaBasketballApp").controller("RegisterTeamController", RegisterTeamController);
        });
    })(Controllers = Fma.Controllers || (Fma.Controllers = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=TeamController.js.map