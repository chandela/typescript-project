import * as angular from 'angular';

namespace DocumentManagerApplication {

   class HomeController {
       public static $inject = ['$scope'];
    constructor(private $state: any, private $scope: any) {
    }
   }

   export class DocController implements ng.IComponentOptions {
        bindings: any = {
            onSave: '&',
            save: '&',
            refresh: '&',
            isViewDirty: '<',
        };

        templateUrl = '../../../../../Index/index.html';
        controllerAs: string = 'DocController';
        controller = HomeController;
    }

        angular.module('DocManager')
        .controller("HomeController", HomeController);
}
