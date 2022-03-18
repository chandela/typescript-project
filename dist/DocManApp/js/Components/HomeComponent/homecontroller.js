"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var DocumentManagerApplication;
(function (DocumentManagerApplication) {
    var HomeController = /** @class */ (function () {
        function HomeController($state, $scope) {
            this.$state = $state;
            this.$scope = $scope;
        }
        HomeController.$inject = ['$scope'];
        return HomeController;
    }());
    var DocController = /** @class */ (function () {
        function DocController() {
            this.bindings = {
                onSave: '&',
                save: '&',
                refresh: '&',
                isViewDirty: '<',
            };
            this.templateUrl = '../../../../../Index/index.html';
            this.controllerAs = 'DocController';
            this.controller = HomeController;
        }
        return DocController;
    }());
    DocumentManagerApplication.DocController = DocController;
    angular.module('DocManager')
        .controller("HomeController", HomeController);
})(DocumentManagerApplication || (DocumentManagerApplication = {}));
