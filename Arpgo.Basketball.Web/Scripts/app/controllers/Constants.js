var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var Constants = (function () {
            function Constants() {
            }
            Constants.passwordRegex = "^(?=.*\\d)(?=.*[A-Z])(.){6,100}$";
            return Constants;
        })();
        Controllers.Constants = Constants;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=Constants.js.map