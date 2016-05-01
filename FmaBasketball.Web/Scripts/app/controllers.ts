"use strict";

export class Controllers {
    constructor() {
        var app = angular.module("controllers", []);

        app.controller("homeController", ($scope, $location) => {
            $scope.name = "John";
            $scope.lastName = "Doe";
        });
    }
}