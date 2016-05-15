module Arpgo.Models {

    export class Team implements ITeam {
        Id: number;
        AspNetUser_Id: string;
        Name: string;
        CaptainFirstName: string;
        CaptainLasttName: string;
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
        CaptainFirstName: string;
        CaptainLasttName: string;
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
        CaptainFirstName: string;
        CaptainLasttName: string;
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