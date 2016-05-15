module Arpgo.Services {
    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/GetType");
        }
    }

    export class NumberCheckFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/PlayerNumberAvailable");
        }
    }

    export class UserCheckFactory {
        static $inject = ["$resource"];

        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/UserNameAvailable");
        }
    }
}