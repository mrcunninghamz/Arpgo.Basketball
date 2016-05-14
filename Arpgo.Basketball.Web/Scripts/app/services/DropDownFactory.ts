module Arpgo.Services {
    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/GetType");
        }
    }

    angular.element(document)
        .ready(() => {
            var services = angular.module("Services", ["ngResource"]);
            services.factory("DropDownService", DropDownFactory);
            services.factory("TeamService", TeamFactory);

        });
}