window.angularApp.factory("PrinterEditModal", ["API_URL", "window", "jQuery", "$http", "$uibModal", "$sce", "$rootScope", function (API_URL, window, $, $http, $uibModal, $sce, $scope) {
    return function($rscope) {
        var printerId;
        var uibModalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template: "<div class=\"modal-header\">" +
                            "<button ng-click=\"closeprinterEditModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                           "<h3 class=\"modal-title\" id=\"modal-title\"><span class=\"fa fa-fw fa-pencil\"></span> {{ modal_title }}</h3>" +
                        "</div>" +
                        "<div class=\"modal-body\" id=\"modal-body\">" +
                            "<div bind-html-compile=\"rawHtml\">Loading...</div>" +
                        "</div>",
            controller: function ($scope, $uibModalInstance) {
                $http({
                  url: window.baseUrl + "/_inc/printer.php?printer_id=" + $rscope.printer.printer_id + "&action_type=EDIT",
                  method: "GET"
                })
                .then(function(response, status, headers, config) {
                    $scope.modal_title = $rscope.printer.title;
                    $scope.rawHtml = $sce.trustAsHtml(response.data);
                    setTimeout(function() {
                        window.storeApp.select2();
                    }, 100);
                }, function(response) {
                   window.swal("¡Advertencia!", response.data.errorMsg, "error");
                });

                $(document).delegate("#printer-update", "click", function(e) {
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

                        // Alert Box
                        window.swal({
                          title: "¡Muy bien hecho!",
                          text: response.data.msg,
                          icon: "success",
                          buttons: true,
                          dangerMode: false,
                        })
                        .then(function (willDelete) {
                            if (willDelete) {
                                $scope.closeprinterEditModal();
                                $(document).find(".close").trigger("click");
                                printerId = response.data.id;
                                
                                $(datatable).DataTable().ajax.reload(function(json) {
                                    if ($("#row_"+printerId).length) {
                                        $("#row_"+printerId).flash("yellow", 5000);
                                    }
                                }, false);

                            } else {
                                $(datatable).DataTable().ajax.reload(null, false);
                            }
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


                $scope.editPrinterType = 'network';
                $scope.isEditWindows = false;
                $scope.isEditLinux = $scope.isEditWindows;
                $scope.isEditNetwork = true;
                $(document).delegate("#edit-printer-type", "select2:select", function (e) {
                    var data = e.params.data;
                    var isEditWindows = false;
                    var isEditLinux = false;
                    var isEditNetwork = false;

                    if (data.element.value == "windows") {
                        isEditWindows = true;
                        isEditLinux = false;
                        isEditNetwork = false;
                    }
                    if (data.element.value == "linux") {
                        isEditWindows = false;
                        isEditLinux = true;
                        isEditNetwork = false;
                    }
                    if (data.element.value == "network") {
                        isEditWindows = false;
                        isEditLinux = false;
                        isEditNetwork = true;
                    }

                    $scope.$apply(function () {
                        $scope.isEditWindows = isEditWindows;
                        $scope.isEditLinux = isEditLinux;
                        $scope.isEditNetwork = isEditNetwork;
                    });
                });



                $scope.closeprinterEditModal = function () {
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