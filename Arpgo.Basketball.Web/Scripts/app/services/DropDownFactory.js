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
        var NumberCheckFactory = (function () {
            function NumberCheckFactory($resource) {
                return $resource("/api/Utility/PlayerNumberAvailable");
            }
            NumberCheckFactory.$inject = ["$resource"];
            return NumberCheckFactory;
        }());
        Services.NumberCheckFactory = NumberCheckFactory;
        var UserCheckFactory = (function () {
            function UserCheckFactory($resource) {
                return $resource("/api/Utility/UserNameAvailable");
            }
            UserCheckFactory.$inject = ["$resource"];
            return UserCheckFactory;
        }());
        Services.UserCheckFactory = UserCheckFactory;
    })(Services = Arpgo.Services || (Arpgo.Services = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=DropDownFactory.js.map