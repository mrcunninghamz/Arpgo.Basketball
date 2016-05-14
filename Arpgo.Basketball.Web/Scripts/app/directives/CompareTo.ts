
module Arpgo.Directives {
    export interface ICompareToScope extends ng.IScope {
        compareTo: any;
        compareToValue: string;
        form: any;
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

    angular.element(document)
        .ready(() => {
            var directives = angular.module("BasketballApp");
            directives.directive("compareTo", CompareTo.instance);

        });
}