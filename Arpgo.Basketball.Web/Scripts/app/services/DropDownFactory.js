var Arpgo;
(function (Arpgo) {
    var Services;
    (function (Services) {
        var DropDownFactory = (function () {
            function DropDownFactory($resource) {
                return $resource("/api/Utility/GetType");
            }
            DropDownFactory.$inject = ["$resource"];
            return DropDownFactory;
        }());
        Services.DropDownFactory = DropDownFactory;
    })(Services = Arpgo.Services || (Arpgo.Services = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=DropDownFactory.js.map