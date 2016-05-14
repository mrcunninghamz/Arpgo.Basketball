/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Arpgo.Controllers {
    import ngr = angular.resource;

    export interface IRegisterTeamScope extends ITeamScope {
        PasswordRegex: string;
        save(team: Models.ITeam): void;
    }

    export interface ITeamScope extends ng.IScope {
        Model: any;
    }

    export interface IManageTeam {
        Scope: any;
        PasswordRegex: string;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;
    }

    export interface IRegisterTeam extends IManageTeam{
        Window: ng.IWindowService;
    }
}