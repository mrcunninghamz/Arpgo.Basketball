module Fma.Services {
    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/GetType");
        }
    }

    export class TeamFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Team/:id");
        }
    }

    angular.element(document)
        .ready(() => {
            var services = angular.module("Services", ["ngResource"]);
            services.factory("DropDownService", DropDownFactory);
            services.factory("TeamService", TeamFactory);

        });
}