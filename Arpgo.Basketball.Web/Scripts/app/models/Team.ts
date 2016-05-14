module Fma.Models {

    export class Team implements ITeam {
        Id: number;
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
    }

    export class CreateTeam implements ITeam {
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
        Password: string;
        ConfirmPassword: string;
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
    }
}