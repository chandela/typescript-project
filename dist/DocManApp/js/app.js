"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-cookies");
var $ = require("jquery");
var DocumentManagerApplication;
(function (DocumentManagerApplication) {
    var app = angular.module('DocManager', ['ngAnimate', 'ui.router', 'oc.lazyLoad', 'angular-loading-bar', 'ngScrollbars', 'ui.bootstrap', 'ngStorage', 'ui.mention'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.$on('$stateChangeSuccess', function (event, toState) {
                $rootScope.title = toState.title;
            });
            $rootScope.$on('viewChanged', function (e, data) {
                $rootScope.isViewDirty = data.isViewDirty;
            });
            $rootScope.$on('detailsViewChanged', function (e, data) {
                $rootScope.isDetailsWindowDirty = data.isDetailsWindowDirty;
            });
            $rootScope.$on('propertyViewChanged', function (e, data) {
                $rootScope.isPropertyWindowDirty = data.isPropertyWindowDirty;
            });
            $rootScope.$on('documentManagerViewChanged', function (e, data) {
                $rootScope.isDocumentManagerWindowDirty = data.isDocumentManagerWindowDirty;
            });
        }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('LoadingInterceptor');
        }])
        .service('LoadingInterceptor', ['$q', '$rootScope', '$log',
        function ($q, $rootScope, $log) {
            var xhrCreations = 0;
            var xhrResolutions = 0;
            function isLoading() {
                return xhrResolutions < xhrCreations;
            }
            function updateStatus() {
                $rootScope.isViewLoading = isLoading();
            }
            return {
                request: function (config) {
                    xhrCreations++;
                    updateStatus();
                    return config;
                },
                requestError: function (rejection) {
                    xhrResolutions++;
                    updateStatus();
                    $log.error('Request error:', rejection);
                    return $q.reject(rejection);
                },
                response: function (response) {
                    xhrResolutions++;
                    updateStatus();
                    return response;
                },
                responseError: function (rejection) {
                    xhrResolutions++;
                    updateStatus();
                    $log.error('Response error:', rejection);
                    $('.k-loading-image').hide();
                    return $q.reject(rejection);
                }
            };
        }
    ])
        .filter('trusted', ['$sce', function ($sce) {
            var div = document.createElement('div');
            return function (text) {
                div.innerHTML = text;
                return $sce.trustAsHtml(div.textContent);
            };
        }])
        .filter('utcToLocal', ['$filter', function ($filter) {
            return function (utcDateString, format) {
                if (!utcDateString) {
                    return;
                }
                if (utcDateString.indexOf('Z') === -1 && utcDateString.indexOf('+') === -1) {
                    utcDateString += 'Z';
                }
                return $filter('date')(utcDateString, format);
            };
        }])
        .filter('customFilter', function () {
        return function (modelValue) {
            if (modelValue != null) {
                // return Helpers.replaceAngularBraces(modelValue).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            }
        };
    })
        .directive('mentionControl', function () {
        return {
            require: 'uiMention',
            link: function ($scope, $element, $attrs, uiMention) {
                uiMention.findChoices = function (match, mentions) {
                    var isMentioned = false;
                    choices.forEach(function (item) {
                        var text = "[" + item.Text + "]";
                        if (!isMentioned) {
                            if (match.input.includes(text)) {
                                isMentioned = true;
                            }
                        }
                    });
                    if (mentions.length === 0 && !isMentioned) {
                        return choices
                            // .filter(choice => !mentions.some(mention => mention.Text === choice.Text))
                            .filter(function (choice) { return ~("" + choice.Text).indexOf(match[1]); });
                    }
                };
            }
        };
    });
})(DocumentManagerApplication || (DocumentManagerApplication = {}));
var choices;
