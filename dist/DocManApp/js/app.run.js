var DocumentManagerApplication;
(function (DocumentManagerApplication) {
    angular.module('DocManager')
        .run(['$rootScope', '$uibModal', '$state', '$sessionStorage', '$location', function ($rootScope, $uibModal, $state, $sessionStorage, $location) {
            $rootScope.modal = false;
            $rootScope.message = "There are unsaved changes. Do you want to continue?";
            if ($sessionStorage.UserContext !== undefined && $sessionStorage.UserContext !== null) {
            }
            else {
                $location.path("home");
            }
            window.onbeforeunload = function (e) {
                if ($rootScope.isViewDirty || $rootScope.isDetailsWindowDirty || $rootScope.isPropertyWindowDirty || $rootScope.isDocumentManagerWindowDirty || $rootScope.isQuestionnaireWindowDirty) {
                    // let message = Resources.WindowExitOrRefreshMessage;
                    return "message";
                }
            };
            $rootScope.$on('moveBackwardEvent', function (event, args) {
                $rootScope.message = "There are unsaved changes. Do you want to continue?";
                if ($rootScope.isDetailsWindowDirty) {
                    $rootScope.modal = false;
                    var modalInstance = $uibModal.open({
                        templateUrl: 'js/modal.html',
                        backdrop: 'static'
                    });
                    modalInstance.result.then(function (selectedItem) {
                        $rootScope.$broadcast('moveBackwardWithoutSaving');
                        $rootScope.modal = true;
                    }, function () {
                    });
                }
                else {
                    $rootScope.$broadcast('moveBackwardWithoutSaving');
                }
            });
            $rootScope.$on('moveForwardEvent', function (event, args) {
                $rootScope.message = "There are unsaved changes. Do you want to continue?";
                if ($rootScope.isDetailsWindowDirty) {
                    $rootScope.modal = false;
                    var modalInstance = $uibModal.open({
                        templateUrl: 'js/modal.html',
                        backdrop: 'static'
                    });
                    modalInstance.result.then(function (selectedItem) {
                        $rootScope.$broadcast('moveForwardWithoutSaving');
                        $rootScope.modal = true;
                    }, function () {
                    });
                }
                else {
                    $rootScope.$broadcast('moveForwardWithoutSaving');
                }
            });
            $rootScope.$on('detailsWindowCloseEvent', function (event, args) {
                $rootScope.message = "There are unsaved changes. Do you want to continue?";
                if ($rootScope.isDetailsWindowDirty) {
                    $rootScope.modal = false;
                    var modalInstance = $uibModal.open({
                        templateUrl: 'js/modal.html',
                        backdrop: 'static'
                    });
                    modalInstance.result.then(function (selectedItem) {
                        $rootScope.$broadcast('closeDetailsWindowWithoutSaving');
                        $rootScope.modal = true;
                    }, function () {
                        $rootScope.modal = true;
                    });
                }
                else {
                    $rootScope.$broadcast('closeDetailsWindowWithoutSaving');
                }
            });
        }]);
})(DocumentManagerApplication || (DocumentManagerApplication = {}));
