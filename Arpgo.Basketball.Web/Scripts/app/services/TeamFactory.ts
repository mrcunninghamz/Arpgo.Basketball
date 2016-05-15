module Arpgo.Services {

    export class TeamFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Team/:id", { id: "@_id" },
            {
                update: {
                    method: "PUT"
                }
            });
        }
    }

    export class TeamPlayerFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/TeamPlayers/:id", { id: "@_id" },
                {
                    update: {
                        method: "PUT"
                    }
                });
        }
    }

    export class PlayerFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Player/:id", { id: "@_id" },
                {
                    update: {
                        method: "PUT"
                    }
                });
        }
    }

    export class TeamDataService implements Arpgo.Controllers.ITeamDataService {
        Team: Models.Team;
        
        SetTeam = (team: Models.Team) => {
            this.Team = team;
        }

        GetTeam = (): Models.Team => {
            return this.Team;
        }
    }
}