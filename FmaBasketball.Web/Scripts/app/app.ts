"use strict";
import controllers = require("controllers");

export class FmaBasketballApp {
    constructor() {
        var ngApp = angular.module("fmaBasketballApp", ["ngRoute", "ngSanitize", "ui.bootstrap", "controllers"]);
        var appControllers = new controllers.Controllers();
    }
}