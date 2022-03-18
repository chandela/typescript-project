namespace DocumentManagerApplication {
    angular.module('DocManager')
        .run(['$rootScope', '$uibModal', '$state', '$sessionStorage', '$location', ($rootScope, $uibModal, $state, $sessionStorage, $location) => {
            $rootScope.modal = false;
            $rootScope.message = "There are unsaved changes. Do you want to continue?";
            if ($sessionStorage.UserContext !== undefined && $sessionStorage.UserContext !== null) {
            }
            else {
                $location.path("home");
            }
            window.onbeforeunload = (e) => {
                if ($rootScope.isViewDirty || $rootScope.isDetailsWindowDirty || $rootScope.isPropertyWindowDirty || $rootScope.isDocumentManagerWindowDirty || $rootScope.isQuestionnaireWindowDirty) {
                   // let message = Resources.WindowExitOrRefreshMessage;
                    return "message";
                }
            };

            $rootScope.$on('moveBackwardEvent',
                (event, args) => {
                    $rootScope.message = "There are unsaved changes. Do you want to continue?";
                    if ($rootScope.isDetailsWindowDirty) {
                        $rootScope.modal = false;
                        let modalInstance = $uibModal.open({
                            templateUrl: 'js/modal.html',
                            backdrop: 'static'
                        });
                        modalInstance.result.then((selectedItem) => {
                            $rootScope.$broadcast('moveBackwardWithoutSaving');
                            $rootScope.modal = true;
                        },
                            () => {
                            });
                    } else {
                        $rootScope.$broadcast('moveBackwardWithoutSaving');
                    }
                });

            $rootScope.$on('moveForwardEvent',
                (event, args) => {
                    $rootScope.message = "There are unsaved changes. Do you want to continue?";
                    if ($rootScope.isDetailsWindowDirty) {
                        $rootScope.modal = false;
                        let modalInstance = $uibModal.open({
                            templateUrl: 'js/modal.html',
                            backdrop: 'static'
                        });
                        modalInstance.result.then((selectedItem) => {
                            $rootScope.$broadcast('moveForwardWithoutSaving');
                            $rootScope.modal = true;
                        },
                            () => {
                            });
                    } else {
                        $rootScope.$broadcast('moveForwardWithoutSaving');
                    }
                });

            $rootScope.$on('detailsWindowCloseEvent',
                (event, args) => {
                    $rootScope.message = "There are unsaved changes. Do you want to continue?";
                    if ($rootScope.isDetailsWindowDirty) {
                        $rootScope.modal = false;
                        let modalInstance = $uibModal.open({
                            templateUrl: 'js/modal.html',
                            backdrop: 'static'
                        });
                        modalInstance.result.then((selectedItem) => {
                            $rootScope.$broadcast('closeDetailsWindowWithoutSaving');
                            $rootScope.modal = true;
                        },
                            () => {
                                $rootScope.modal = true;
                            });
                    } else {
                        $rootScope.$broadcast('closeDetailsWindowWithoutSaving');
                    }
                });
        }]);
}
