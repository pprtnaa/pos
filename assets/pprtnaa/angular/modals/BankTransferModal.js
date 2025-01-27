//================================
// start transfer factory
//================================

window.angularApp.factory("BankTransferModal", ["API_URL", "window", "jQuery", "$http", "$uibModal", "$sce", "$rootScope", function (API_URL, window, $, $http, $uibModal, $sce, $scope) {
    return function() {
        var uibModalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: "<div class=\"modal-header\">" +
                            "<button ng-click=\"CloseBankTransferModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                           "<h3 class=\"modal-title\" id=\"modal-title\"><span class=\"fa fa-fw fa-paper-plane\"></span> {{ modal_title }}</h3>" +
                        "</div>" +
                        "<div class=\"modal-body\" id=\"modal-body\">" +
                            "<div bind-html-compile=\"rawHtml\">Loading...</div>" +
                        "</div>",
            controller: function ($scope, $uibModalInstance) {
                $http({
                  url: window.baseUrl + "/_inc/banking.php?action_type=TRANSFER",
                  method: "GET"
                })
                .then(function(response, status, headers, config) {
                    $scope.modal_title = "Transfer Balance";
                    $scope.rawHtml = $sce.trustAsHtml(response.data);
                    setTimeout(function() {
                        window.storeApp.select2();
                    }, 100);
                }, function(response) {
                    window.swal("¡Advertencia!", response.data.errorMsg, "error")
                    .then(function() {
                        $scope.CloseBankTransferModal();
                    });
                });

                // Confirm transfer
                $(document).delegate("#transfer-confirm-btn", "click", function(e) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();

                    var $tag = $(this);
                    var $btn = $tag.button("loading");
                    var form = $($tag.data("form"));
                    var datatable = $tag.data("datatable");
                    form.find(".alert").remove();
                    var actionUrl = form.attr("action");
                    $http({
                        url: window.baseUrl + "/_inc/" + actionUrl,
                        method: "POST",
                        data: form.serialize(),
                        cache: false,
                        processData: false,
                        contentType: false,
                        dataType: "json"
                    }).
                    then(function(response) {
                        $btn.button("reset");
                        var alertMsg = "<div class=\"alert alert-success\">";
                            alertMsg += "<p><i class=\"fa fa-check\"></i> " + response.data.msg + ".</p>";
                            alertMsg += "</div>";
                        form.find(".box-body").before(alertMsg);

                        // Alert
                        swal("Success", response.data.msg, "success").then(function(value) {
                            $scope.CloseBankTransferModal();
                            $(document).find(".close").trigger("click");
                            // update balance    
                            $("#balance-display").text("TK "+response.data.balance);    
                            // flash update row    
                            var rowId = response.data.invoice.invoice_id;
                            $(datatable).DataTable().ajax.reload(function(json) {
                                if ($("#row_"+rowId).length) {
                                    $("#row_"+rowId).flash("yellow", 5000);
                                }
                            }, false);                        
                        });

                    }, function(response) {
                        $btn.button("reset");
                        var alertMsg = "<div class=\"alert alert-danger\">";
                        window.angular.forEach(response.data, function(value, key) {
                            alertMsg += "<p><i class=\"fa fa-warning\"></i> " + value + ".</p>";
                        });
                        alertMsg += "</div>";
                        form.find(".box-body").before(alertMsg);
                        $(":input[type=\"button\"]").prop("disabled", false);
                        window.swal("¡Advertencia!", response.data.errorMsg, "error");
                    });
                });
                $scope.CloseBankTransferModal = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
            scope: $scope,
            size: "md",
            backdrop  : "static",
            keyboard: true,
            resolve: {
                userForm: function () {
                    // return pcForm;
                }
            }
        });

        uibModalInstance.result.catch(function () { 
            uibModalInstance.close(); 
        });
    };
}]);

//===============================
// end transfer factory
//===============================
