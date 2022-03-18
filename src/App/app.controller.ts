import * as angular from 'angular';

namespace DocumentManagerApplication {

    class AppCtrl {
        ShowSideMenu: boolean = false;
        profileInfoMenu: any;
        public static $inject = [
            '$location', '$state', '$scope', '$roootScope'
        ];
        constructor(private $location: any, private $state: any, private $scope: any, private $rootScope: any) {
        }

        $onInit() {
            this.$scope.$on("closeAsideMenu", () => {
                this.ShowSideMenu = false;
            });
            this.$scope.$on("showAsideMenu", () => {
                this.ShowSideMenu = true;
            });
            this.$rootScope.billin = 'Hari';
        }

    }

angular.module('DocManager')
        .controller("AppCtrl", AppCtrl);
}
