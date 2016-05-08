var Fma;
(function (Fma) {
    var Models;
    (function (Models) {
        var Team = (function () {
            function Team() {
                this.SelectedDivision = { Id: "", Label: "Select A Division" };
                this.SelectedReason = { Id: "", Label: "Select A Reason" };
                this.SelectedState = { Id: "", Label: "Select A State/Country" };
            }
            return Team;
        })();
        Models.Team = Team;
    })(Models = Fma.Models || (Fma.Models = {}));
})(Fma || (Fma = {}));
//# sourceMappingURL=Team.js.map