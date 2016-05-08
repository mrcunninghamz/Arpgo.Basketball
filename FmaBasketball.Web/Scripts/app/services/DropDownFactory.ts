module Fma.Services {
    export class DropDownFactory {
        static $inject = ["$resource"];
        
        constructor($resource: angular.resource.IResourceService) {
            return $resource("/api/Team/GetDivisions");
        }
    }
}