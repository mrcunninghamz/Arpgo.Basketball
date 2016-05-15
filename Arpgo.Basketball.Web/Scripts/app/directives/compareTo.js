var Arpgo;
(function (Arpgo) {
    var Directives;
    (function (Directives) {
        var CompareTo = (function () {
            function CompareTo() {
                var _this = this;
                this.require = "ngModel";
                this.scope = {
                    compareTo: "="
                };
                this.link = function (scope, element, attrs, ngModel) {
                    _this.Scope = scope;
                    ngModel.$validators.compareTo = function (modelValue) {
                        return modelValue === _this.Scope.compareTo.$viewValue;
                    };
                    _this.Scope.$watch("compareTo.$viewValue", function (value) {
                        ngModel.$validate();
                    });
                };
            }
            CompareTo.instance = function () {
                return new CompareTo;
            };
            return CompareTo;
        }());
        Directives.CompareTo = CompareTo;
        var UserCheckExists = (function () {
            function UserCheckExists() {
                var _this = this;
                this.require = "ngModel";
                this.scope = {
                    userCheckExists: "="
                };
                this.link = function (scope, element, attrs, ngModel) {
                    _this.Scope = scope;
                    var service = _this.UserCheckService;
                    _this.Available = true;
                    ngModel.$validators.userAvailable = function () {
                        return _this.Available;
                    };
                    _this.Scope.$watch("userCheckExists.$viewValue", function (value) {
                        if (value == null || value.length == 0) {
                            return true;
                        }
                        if (_this.Timeout != null) {
                            clearTimeout(_this.Timeout);
                        }
                        _this.Timeout = setTimeout(function () {
                            service.get({ email: value }, function (response) {
                                _this.Available = response.Data;
                                ngModel.$validate();
                            });
                        }, 500);
                    });
                };
                this.controller = ["UserCheckService", function (userCheckService) {
                        _this.UserCheckService = userCheckService;
                    }];
            }
            UserCheckExists.instance = function () {
                return new UserCheckExists;
            };
            return UserCheckExists;
        }());
        Directives.UserCheckExists = UserCheckExists;
        var PlayerNumberCheckExists = (function () {
            function PlayerNumberCheckExists() {
                var _this = this;
                this.require = "ngModel";
                this.scope = {
                    playerNumberCheckExists: "=",
                    teamId: "="
                };
                this.link = function (scope, element, attrs, ngModel) {
                    _this.Scope = scope;
                    var service = _this.NumberCheckService;
                    _this.Available = true;
                    ngModel.$validators.numberAvailable = function () {
                        return _this.Available;
                    };
                    _this.Scope.$watch("playerNumberCheckExists.$viewValue", function (value) {
                        if (value == null || value.length == 0) {
                            return true;
                        }
                        if (_this.Timeout != null) {
                            clearTimeout(_this.Timeout);
                        }
                        _this.Timeout = setTimeout(function () {
                            service.get({ number: value, teamId: _this.Scope.teamId.$viewValue }, function (response) {
                                _this.Available = response.Data;
                                ngModel.$validate();
                            });
                        }, 500);
                    });
                };
                this.controller = ["NumberCheckService", function (numberCheckService) {
                        _this.NumberCheckService = numberCheckService;
                    }];
            }
            PlayerNumberCheckExists.instance = function () {
                return new PlayerNumberCheckExists;
            };
            return PlayerNumberCheckExists;
        }());
        Directives.PlayerNumberCheckExists = PlayerNumberCheckExists;
    })(Directives = Arpgo.Directives || (Arpgo.Directives = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=CompareTo.js.map