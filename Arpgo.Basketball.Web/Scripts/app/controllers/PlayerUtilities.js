var Arpgo;
(function (Arpgo) {
    var Controllers;
    (function (Controllers) {
        var PlayerUtilities = (function () {
            function PlayerUtilities() {
                var _this = this;
                this.NumberPadding = function (number, max) {
                    number = number.toString();
                    return number.length < max ? _this.NumberPadding("0" + number, max) : number;
                };
            }
            return PlayerUtilities;
        }());
        Controllers.PlayerUtilities = PlayerUtilities;
    })(Controllers = Arpgo.Controllers || (Arpgo.Controllers = {}));
})(Arpgo || (Arpgo = {}));
//# sourceMappingURL=PlayerUtilities.js.map