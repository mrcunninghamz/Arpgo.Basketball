module Fma.Models {

    export class Team implements  ITeam {
        Name: string;
        CaptainName: string;
        Division: string;
        Reason: string;
        Email: string;
        OtherReason: string;
        HomePhoneNumber: string;
        AlternatePhoneNumber: string;
        Address1: string;
        Address2: string;
        City: string;
        State: string;
        Zip: string;
        SelectedDivision: {};
        SelectedReason: {};

        constructor() {
            this.SelectedDivision = { Id: "", Label: "Select A Division" };
            this.SelectedReason = { Id: "", Label: "Select A Reason" };
        }
    }

    export interface ITeam {
        Name: string;
        CaptainName: string;
        Division: string;
        Reason: string;
        Email: string;
        OtherReason: string;
        HomePhoneNumber: string;
        AlternatePhoneNumber: string;
        Address1: string;
        Address2: string;
        City: string;
        State: string;
        Zip: string;

        SelectedDivision: {};
        SelectedReason: {}
    }
}