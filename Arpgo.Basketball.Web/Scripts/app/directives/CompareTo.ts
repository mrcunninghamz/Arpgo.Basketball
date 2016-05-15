
module Arpgo.Directives {
    export interface ICompareToScope extends ng.IScope {
        compareTo: any;
    }
    
    export class CompareTo implements ng.IDirective {
        Scope: ICompareToScope;

        static instance(): ng.IDirective {
            return new CompareTo;
        }
        require = "ngModel";
        scope = {
            compareTo : "="
        }

        link = (scope: ICompareToScope, element: any, attrs: any, ngModel: any) => {
            this.Scope = scope;
            ngModel.$validators.compareTo = (modelValue) => {
                return modelValue === this.Scope.compareTo.$viewValue;
            };
            
            this.Scope.$watch("compareTo.$viewValue", (value) => {
                ngModel.$validate();
            });
        }

    }

    export class UserCheckExists implements ng.IDirective {
        UserCheckService: any;
        Available: boolean;
        Scope: any;
        Timeout: any;

        static instance(): ng.IDirective {
            return new UserCheckExists;
        }
        require = "ngModel";
        scope = {
            userCheckExists: "="
        }
        link = (scope: any, element: any, attrs: any, ngModel: any)=> {
            this.Scope = scope;
            var service = this.UserCheckService;
            this.Available = true;

            ngModel.$validators.userAvailable = () => {
                return this.Available;
            }

            this.Scope.$watch("userCheckExists.$viewValue", (value) => {
                if (value == null || value.length == 0) {
                    return true;
                }

                if (this.Timeout != null) {
                    clearTimeout(this.Timeout);
                }

                this.Timeout = setTimeout(() => {
                    service.get({ email: value },
                    (response) => {
                        this.Available = response.Data;
                        ngModel.$validate();
                    });
                }, 500);
            });
        }
        controller = ["UserCheckService", (userCheckService: any) => {
            this.UserCheckService = userCheckService;
        }];
    }

    export class PlayerNumberCheckExists implements ng.IDirective {
        NumberCheckService: any;
        Available: boolean;
        Scope: any;
        Timeout: any;

        static instance(): ng.IDirective {
            return new PlayerNumberCheckExists;
        }
        require = "ngModel";
        scope = {
            playerNumberCheckExists: "=",
            teamId : "="
        }
        link = (scope: any, element: any, attrs: any, ngModel: any) => {
            this.Scope = scope;
            var service = this.NumberCheckService;
            this.Available = true;

            ngModel.$validators.numberAvailable = () => {
                return this.Available;
            }

            this.Scope.$watch("playerNumberCheckExists.$viewValue", (value) => {
                if (value == null || value.length == 0) {
                    return true;
                }

                if (this.Timeout != null) {
                    clearTimeout(this.Timeout);
                }

                this.Timeout = setTimeout(() => {
                    service.get({ number: value, teamId: this.Scope.teamId.$viewValue },
                        (response) => {
                            this.Available = response.Data;
                            ngModel.$validate();
                        });
                }, 500);
            });
        }
        controller = ["NumberCheckService", (numberCheckService: any) => {
            this.NumberCheckService = numberCheckService;
        }];
    }
}