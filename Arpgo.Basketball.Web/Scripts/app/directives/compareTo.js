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
        })();
        Directives.CompareTo = CompareTo;
        angular.element(document)
            .ready(function () {
            var directives = angular.module("BasketballApp");
            directives.directive("compareTo", CompareTo.instance);
        });
    })(Directives = Arpgo.Directives || (Arpgo.Directives = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=CompareTo.js.map