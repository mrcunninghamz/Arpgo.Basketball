module Fma.Controllers {
    export class HomeController {
        static $inject = ["$scope"];

        scope: any;

        constructor($scope: ng.IScope) {
            this.scope = $scope;

            this.scope.Model = new HomeModel();

        }

    }

    export class HomeModel implements  IHomeModel {
        name = "John";
        lastName = "Doe";
    
    }

    export interface IHomeModel {
        name: string;
        lastName: string;

    }

    angular.element(document)
        .ready(() => {
            angular.module("BasketballApp").controller("HomeController", HomeController);

        });
}