module Arpgo.Services {
    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Utility/GetType");
        }
    }
}