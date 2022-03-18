namespace DocumentManagerApplication {
angular.module('DocManager')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) => {
    // Todo: Values will come from resource file
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',
        {
            url: '/',
            title: 'Home',
            templateUrl: '/components/HomeComponent/HomeComponent.html',
            controller: 'HomeController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'appCss',
                            insertBefore: 'appStyles',
                            files: [
                                // Have to do css for pages
                                'js/components/common/css/toggle-switch.css',
                                'js/components/common/css/sub-header.css',
                                'js/components/common/aside-menu/aside-menu.css',
                                'js/components/common/css/form.css',
                            ]
                        },
                    ]);
                }
            }
        });
    }]);

}