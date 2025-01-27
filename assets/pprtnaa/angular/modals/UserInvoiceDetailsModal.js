window.angularApp.factory("UserInvoiceDetailsModal", ["API_URL", "window", "jQuery", "$http", "$uibModal", "$sce", "$rootScope", function (API_URL, window, $, $http, $uibModal, $sce, $scope) {
    var $from = window.getParameterByName("from");
    var $to = window.getParameterByName("to");
    return function($scope) {
        var uibModalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: "<div class=\"modal-header\">" +
                            "<button ng-click=\"closeDueCollectionModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                           "<h3 class=\"modal-title\" id=\"modal-title\"><span class=\"fa fa-fw fa-list\"></span> {{ modal_title }}</h3>" +
                        "</div>" +
                        "<div class=\"modal-body\" id=\"modal-body\">" +
                            "<div bind-html-compile=\"rawHtml\">Loading...</div>" +
                        "</div>",
            controller: function ($scope, $uibModalInstance) {
                $http({
                  url: window.baseUrl + "/_inc/invoice.php?action_type=INVOICEDETAILS&user_id=" + $scope.userID + "&from=" + $from + "&to=" + $to,
                  method: "GET"
                })
                .then(function(response, status, headers, config) {
                    $scope.modal_title = "Invoice List of " + $scope.username;
                    $scope.rawHtml = $sce.trustAsHtml(response.data);

                    setTimeout(function() {
                        window.storeApp.select2();
                    }, 500);
                    
                }, function(response) {
                   window.swal("¡Advertencia!", response.data.errorMsg, "error");
                });

                $scope.closeDueCollectionModal = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
            scope: $scope,
            size: "lg",
            backdrop  : "static",
            keyboard: true, // ESC key close enable/disable
            resolve: {
                userForm: function () {
                    // return usergroupForm;
                }
            }
        });

        uibModalInstance.result.catch(function () { 
            uibModalInstance.close(); 
        });
    };
}]);

window.angularApp.factory("UserInvoiceDueDetailsModal", ["API_URL", "window", "jQuery", "$http", "$uibModal", "$sce", "$rootScope", function (API_URL, window, $, $http, $uibModal, $sce, $scope) {
    var $from = window.getParameterByName("from");
    var $to = window.getParameterByName("to");
    return function($scope) {
        var uibModalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: "<div class=\"modal-header\">" +
                            "<button ng-click=\"closeDueCollectionModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                           "<h3 class=\"modal-title\" id=\"modal-title\">{{ modal_title }}</h3>" +
                        "</div>" +
                        "<div class=\"modal-body\" id=\"modal-body\">" +
                            "<div bind-html-compile=\"rawHtml\">Loading...</div>" +
                        "</div>",
            controller: function ($scope, $uibModalInstance) {
                $http({
                  url: window.baseUrl + "/_inc/invoice.php?action_type=INVOICEDUEDETAILS&user_id=" + $scope.userID + "&from=" + $from + "&to=" + $to,
                  method: "GET"
                })
                .then(function(response, status, headers, config) {
                    $scope.modal_title = "Invoice List of " + $scope.username;
                    $scope.rawHtml = $sce.trustAsHtml(response.data);

                    setTimeout(function() {
                        window.storeApp.select2();
                    }, 500);
                    
                }, function(response) {
                   window.swal("¡Advertencia!", response.data.errorMsg, "error");
                });

                $scope.closeDueCollectionModal = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
            scope: $scope,
            size: "md",
            backdrop  : "static",
            keyboard: true,
        });

        uibModalInstance.result.catch(function () { 
            uibModalInstance.close(); 
        });
    };
}]);