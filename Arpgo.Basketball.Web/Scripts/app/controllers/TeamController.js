/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
var Fma;
(function (Fma) {
    var Controllers;
    (function (Controllers) {
        var ManageTeamController = (function () {
            function ManageTeamController($scope, $window, divisionService, teamService) {
                this.Scope = $scope;
                this.Window = $window;
                this.TeamService = teamService;
                var utilities = new Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.Model = this.TeamService.get();
            }
            ManageTeamController.$inject = ["$scope", "$window", "DropDownService", "TeamService"];
            return ManageTeamController;
        }());
        Controllers.ManageTeamController = ManageTeamController;
        var RegisterTeamController = (function () {
            function RegisterTeamController($scope, $window, divisionService, teamService) {
                var _this = this;
                this.Scope = $scope;
                this.Window = $window;
                this.TeamService = teamService;
                this.Scope.PasswordRegex = Constants.passwordRegex;
                this.Scope.Model = new Fma.Models.CreateTeam();
                var utilities = new Utilities(this.Scope, divisionService);
                utilities.InitiateDropDowns();
                utilities.InitiateWatches();
                this.Scope.save = function (team) {
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
        var Constants = (function () {
            function Constants() {
            }
            Constants.passwordRegex = "^(?=.*\\d)(?=.*[A-Z])(.){6,100}$";
            return Constants;
        }());
        Controllers.Constants = Constants;
        var Utilities = (function () {
            function Utilities($scope, divisionService) {
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
                this.DropDownService = divisionService;
            }
            return Utilities;
        }());
        Controllers.Utilities = Utilities;
        angular.element(document)
            .ready(function () {
            angular.module("BasketballApp")
                .controller("RegisterTeamController", RegisterTeamController)
                .controller("ManageTeamController", ManageTeamController);
        });
    })(Controllers = Fma.Controllers || (Fma.Controllers = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=TeamController.js.map