var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
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
                        if (_this.Scope.form == null)
                            return;
                        _this.ComputeErrorState(_this.Scope.form.Division, newValue);
                    });
                    _this.Scope.$watch("form.Reason.$viewValue.Id", function (newValue, oldValue) {
                        if (_this.Scope.form == null)
                            return;
                        _this.ComputeErrorState(_this.Scope.form.Reason, newValue);
                    });
                    _this.Scope.$watch("form.State.$viewValue.Id", function (newValue, oldValue) {
                        if (_this.Scope.form == null)
                            return;
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
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=Utilities.js.map