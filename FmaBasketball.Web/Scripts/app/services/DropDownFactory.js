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
        })();
        Services.DropDownFactory = DropDownFactory;
    })(Services = Fma.Services || (Fma.Services = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=DropDownFactory.js.map