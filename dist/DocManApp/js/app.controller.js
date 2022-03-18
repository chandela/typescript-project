"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var DocumentManagerApplication;
(function (DocumentManagerApplication) {
    var AppCtrl = /** @class */ (function () {
        function AppCtrl($location, $state, $scope, $rootScope) {
            this.$location = $location;
            this.$state = $state;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.ShowSideMenu = false;
        }
        AppCtrl.prototype.$onInit = function () {
            var _this = this;
            this.$scope.$on("closeAsideMenu", function () {
                _this.ShowSideMenu = false;
            });
            this.$scope.$on("showAsideMenu", function () {
                _this.ShowSideMenu = true;
            });
            this.$rootScope.billin = 'Hari';
        };
        AppCtrl.$inject = [
            '$location', '$state', '$scope', '$roootScope'
        ];
        return AppCtrl;
    }());
    angular.module('DocManager')
        .controller("AppCtrl", AppCtrl);
})(DocumentManagerApplication || (DocumentManagerApplication = {}));
