/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


module Arpgo.Controllers {
    import ngr = angular.resource;

    export interface IRegisterTeamScope extends ITeamScope {
        PasswordRegex: string;
        Model: any;
        save(team: Models.ITeam): void;
    }

    export interface IAddPlayerTeamScope extends ITeamScope {
        Player: IResourceModel<Models.Player>;
        Players: IResourceModel<Models.Player[]>;
        add(player: Models.Player): void;
        edit(): void;
        delete(player: Models.Player): void;
        UpdateTeamId(): void;
    }

    export interface IManageTeamScope extends ITeamScope {
        Team: IResourceModel<Models.Team>;
        edit(): void;
        update(id: number): void;
    }

    export interface ITeamScope extends ng.IScope {
        form: any;
        reset();
    }

    export interface IManageTeam {
        Scope: any;
        PasswordRegex: string;
        TeamService: ngr.IResourceClass<ngr.IResource<any>>;
    }

    export interface IRegisterTeam extends IManageTeam{
        Window: ng.IWindowService;
    }

    export interface IResourceModel<T> extends angular.resource.IResource<T>{
        Data: T;
        $update: angular.resource.IResourceMethod<T>;
    }

    export interface ITeamDataService {
        SetTeam(team: Models.Team): void;
        GetTeam(): Models.Team;
    }
}