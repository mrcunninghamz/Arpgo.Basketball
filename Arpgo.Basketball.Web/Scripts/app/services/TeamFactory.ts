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
}