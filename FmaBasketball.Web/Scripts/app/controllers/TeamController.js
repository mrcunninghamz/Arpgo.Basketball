/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
var Fma;
(function (Fma) {
    var Controllers;
    (function (Controllers) {
        var RegisterTeamController = (function () {
            function RegisterTeamController($scope, divisionService) {
                var _this = this;
                this.Scope = $scope;
                this.Scope.Model = new Fma.Models.Team();
                this.DropDownService = divisionService;
                this.DropDownService.get({ type: "Divisions" }, function (response) {
                    response.Data.unshift(_this.Scope.Model.SelectedDivision);
                    _this.Scope.Divisions = response.Data;
                });
                this.DropDownService.get({ type: "Reasons" }, function (response) {
                    response.Data.unshift(_this.Scope.Model.SelectedReason);
                    _this.Scope.Reasons = response.Data;
                });
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
                this.Scope.$watch("Model.SelectedDivision", function (newValue, oldValue) {
                    if (newValue != oldValue) {
                        _this.Scope.Model.Division = newValue.Id;
                        switch (newValue.Id) {
                            case 1:
                                _this.DropDownService.get({ type: "AReasons" }, function (response) {
                                    response.Data.unshift(_this.Scope.Model.SelectedReason);
                                    _this.Scope.Reasons = response.Data;
                                });
                                break;
                            case 2:
                                _this.DropDownService.get({ type: "BReasons" }, function (response) {
                                    response.Data.unshift(_this.Scope.Model.SelectedReason);
                                    _this.Scope.Reasons = response.Data;
                                });
                                break;
                            default:
                        }
                    }
                    var test = _this.Scope.form.Reason;
                });
            }
            RegisterTeamController.$inject = ["$scope", "DropDownService"];
            return RegisterTeamController;
        }());
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
        var DropDownFactory = (function () {
            function DropDownFactory($resource) {
                return $resource("/api/Team/GetDivisions");
            }
            DropDownFactory.$inject = ["$resource"];
            return DropDownFactory;
        }());
        Services.DropDownFactory = DropDownFactory;
        angular.element(document)
            .ready(function () {
            angular.module("Services", ["ngResource"]).factory("DropDownService", Fma.Services.DropDownFactory);
        });
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=TeamController.js.map