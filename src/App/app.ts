import * as angular from 'angular';
import 'angular-cookies';
import * as $ from 'jquery';
import * as ui from 'bootstrap';


namespace DocumentManagerApplication {
    let app = angular.module('DocManager',
        ['ngAnimate', 'ui.router', 'oc.lazyLoad', 'angular-loading-bar', 'ngScrollbars', 'ui.bootstrap', 'ngStorage', 'ui.mention'])
        .run(['$rootScope', $rootScope => {
            $rootScope.$on('$stateChangeSuccess', (event, toState) => {
                $rootScope.title = toState.title;
            });
            $rootScope.$on('viewChanged', (e, data) => {
                $rootScope.isViewDirty = data.isViewDirty;
            });
            $rootScope.$on('detailsViewChanged', (e, data) => {
                $rootScope.isDetailsWindowDirty = data.isDetailsWindowDirty;
            });
            $rootScope.$on('propertyViewChanged', (e, data) => {
                $rootScope.isPropertyWindowDirty = data.isPropertyWindowDirty;
            });
            $rootScope.$on('documentManagerViewChanged', (e, data) => {
                $rootScope.isDocumentManagerWindowDirty = data.isDocumentManagerWindowDirty;
            });

        }])
        .config(['$httpProvider', $httpProvider => {
            $httpProvider.interceptors.push('LoadingInterceptor');
        }])
        .service('LoadingInterceptor', ['$q', '$rootScope', '$log',
            ($q, $rootScope, $log) => {
                let xhrCreations = 0;
                let xhrResolutions = 0;

                function isLoading() {
                    return xhrResolutions < xhrCreations;
                }

                function updateStatus() {
                    $rootScope.isViewLoading = isLoading();
                }

                return {
                    request(config) {
                        xhrCreations++;
                        updateStatus();
                        return config;
                    },
                    requestError(rejection) {
                        xhrResolutions++;
                        updateStatus();
                        $log.error('Request error:', rejection);
                        return $q.reject(rejection);
                    },
                    response(response) {
                        xhrResolutions++;
                        updateStatus();
                        return response;
                    },
                    responseError(rejection) {
                        xhrResolutions++;
                        updateStatus();
                        $log.error('Response error:', rejection);
                        $('.k-loading-image').hide();
                        return $q.reject(rejection);
                    }
                };
            }
        ])
        .filter('trusted', ['$sce', $sce => {
            let div = document.createElement('div');
            return function (text) {
                div.innerHTML = text;
                return $sce.trustAsHtml(div.textContent);
            };
        }])
        .filter('utcToLocal', ['$filter', $filter => {
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
        .filter('customFilter', () => {
            return function (modelValue) {
                if (modelValue != null) {
                    // return Helpers.replaceAngularBraces(modelValue).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                }
            };
        })
        .directive('mentionControl', function () {
            return {
                require: 'uiMention',
                link: function ($scope, $element, $attrs, uiMention: any) {
                    uiMention.findChoices = function (match, mentions) {
                        let isMentioned = false;
                        choices.forEach(item => {
                            let text = `[${item.Text}]`;
                            if (!isMentioned) {
                                if (match.input.includes(text)) {
                                    isMentioned = true;
                                }
                            }
                        });

                        if (mentions.length === 0 && !isMentioned) {
                            return choices
                                // .filter(choice => !mentions.some(mention => mention.Text === choice.Text))
                                .filter(choice => ~`${choice.Text}`.indexOf(match[1]));
                        }
                    };
                }
            };
        });
}
let choices: any;