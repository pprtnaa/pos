const mix = require('laravel-mix');

// // Main CSS
// mix.styles([

//     // Plugins
//     'assets/bootstrap/css/bootstrap.css',
//     'assets/jquery-ui/jquery-ui.min.css',
//     'assets/font-awesome/css/font-awesome.css',
//     'assets/morris/morris.css',
//     'assets/select2/select2.min.css',
//     'assets/datepicker/datepicker3.css',
//     'assets/timepicker/bootstrap-timepicker.css',
//     'assets/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/toastr/toastr.min.css',

//     // Filemanager
//     'assets/pprtnaa/css/filemanager/dialogs.css',
//     'assets/pprtnaa/css/filemanager/main.css',

//     // Theme
//     'assets/pprtnaa/css/theme.css',
//     'assets/pprtnaa/css/skins/skin-black.css',
//     'assets/pprtnaa/css/skins/skin-blue.css',
//     'assets/pprtnaa/css/skins/skin-green.css',
//     'assets/pprtnaa/css/skins/skin-red.css',
//     'assets/pprtnaa/css/skins/skin-yellow.css',

//     // DataTable
//     'assets/DataTables/datatables.min.css',

//     // Main CSS
//     'assets/pprtnaa/css/main.css',

//     // Responsive CSS
//     'assets/pprtnaa/css/responsive.css',

//     // Barcode CSS
//     // 'assets/pprtnaa/css/barcode.css',

//     // Print CSS
//     'assets/pprtnaa/css/print.css',

// ],'assets/pprtnaa/cssmin/main.css');



// // POS CSS
// mix.styles([

//     'assets/bootstrap/css/bootstrap.css',
//     'assets/jquery-ui/jquery-ui.min.css',
//     'assets/font-awesome/css/font-awesome.css',
//     'assets/datepicker/datepicker3.css',
//     'assets/timepicker/bootstrap-timepicker.min.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/select2/select2.min.css',
//     'assets/toastr/toastr.min.css',
//     'assets/contextMenu/dist/jquery.contextMenu.min.css',

//     // Filemanager
//     'assets/pprtnaa/css/filemanager/dialogs.css',
//     'assets/pprtnaa/css/filemanager/main.css',

//     // Theme
//     'assets/pprtnaa/css/theme.css',
//     'assets/pprtnaa/css/skins/skin-black.css',
//     'assets/pprtnaa/css/skins/skin-blue.css',
//     'assets/pprtnaa/css/skins/skin-green.css',
//     'assets/pprtnaa/css/skins/skin-red.css',
//     'assets/pprtnaa/css/skins/skin-yellow.css',
//     'assets/pprtnaa/css/main.css',

//     // Main
//     'assets/pprtnaa/css/pos/skeleton.css',
//     'assets/pprtnaa/css/pos/pos.css',
//     'assets/pprtnaa/css/pos/responsive.css',

// ],'assets/pprtnaa/cssmin/pos.css');



// // LOGIN CSS
// mix.styles([

//     'assets/bootstrap/css/bootstrap.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/toastr/toastr.min.css',
//     'assets/pprtnaa/css/theme.css',
//     'assets/pprtnaa/css/login.css',

// ],'assets/pprtnaa/cssmin/login.css');



// Angular JS
mix.scripts([

    'assets/pprtnaa/angular/lib/angular/angular.min.js',
    'assets/pprtnaa/angular/lib/angular/angular-sanitize.js',
    'assets/pprtnaa/angular/lib/angular/angular-bind-html-compile.min.js',
    'assets/pprtnaa/angular/lib/angular/ui-bootstrap-tpls-2.5.0.min.js',
    'assets/pprtnaa/angular/lib/angular/angular-route.min.js',
    'assets/pprtnaa/angular/lib/angular-translate/dist/angular-translate.min.js',
    'assets/pprtnaa/angular/lib/ng-file-upload/dist/ng-file-upload.min.js',
    'assets/pprtnaa/angular/lib/angular-local-storage.min.js',
    'assets/pprtnaa/angular/angularApp.js',
    
],'assets/pprtnaa/angularmin/angular.js');

// Angular Filemanager JS
mix.scripts([

    'assets/pprtnaa/angular/filemanager/js/directives/directives.js',
    'assets/pprtnaa/angular/filemanager/js/filters/filters.js',
    'assets/pprtnaa/angular/filemanager/js/providers/config.js',
    'assets/pprtnaa/angular/filemanager/js/entities/chmod.js',
    'assets/pprtnaa/angular/filemanager/js/entities/item.js',
    'assets/pprtnaa/angular/filemanager/js/services/apihandler.js',
    'assets/pprtnaa/angular/filemanager/js/services/apimiddleware.js',
    'assets/pprtnaa/angular/filemanager/js/services/filenavigator.js',
    'assets/pprtnaa/angular/filemanager/js/providers/translations.js',
    'assets/pprtnaa/angular/filemanager/js/controllers/main.js',
    'assets/pprtnaa/angular/filemanager/js/controllers/selector-controller.js',

],'assets/pprtnaa/angularmin/filemanager.js');



// Angular Modal JS
mix.scripts([

    'assets/pprtnaa/angular/modals/InvoiceViewModal.js',
    'assets/pprtnaa/angular/modals/InvoiceInfoEditModal.js',
    'assets/pprtnaa/angular/modals/BoxCreateModal.js',
    'assets/pprtnaa/angular/modals/BoxDeleteModal.js',
    'assets/pprtnaa/angular/modals/BoxEditModal.js',
    'assets/pprtnaa/angular/modals/UnitCreateModal.js',
    'assets/pprtnaa/angular/modals/UnitDeleteModal.js',
    'assets/pprtnaa/angular/modals/UnitEditModal.js',
    'assets/pprtnaa/angular/modals/TaxrateCreateModal.js',
    'assets/pprtnaa/angular/modals/TaxrateDeleteModal.js',
    'assets/pprtnaa/angular/modals/TaxrateEditModal.js',
    'assets/pprtnaa/angular/modals/CategoryCreateModal.js',
    'assets/pprtnaa/angular/modals/CategoryDeleteModal.js',
    'assets/pprtnaa/angular/modals/CategoryEditModal.js',
    'assets/pprtnaa/angular/modals/CurrencyEditModal.js',
    'assets/pprtnaa/angular/modals/CustomerCreateModal.js',
    'assets/pprtnaa/angular/modals/CustomerDeleteModal.js',
    'assets/pprtnaa/angular/modals/CustomerEditModal.js',
    'assets/pprtnaa/angular/modals/SupportDeskModal.js',
    'assets/pprtnaa/angular/modals/DueCollectionDetailsModal.js',
    'assets/pprtnaa/angular/modals/BankingDepositModal.js',
    'assets/pprtnaa/angular/modals/BankingRowViewModal.js',
    'assets/pprtnaa/angular/modals/BankingWithdrawModal.js',
    'assets/pprtnaa/angular/modals/BankAccountCreateModal.js',
    'assets/pprtnaa/angular/modals/BankAccountDeleteModal.js',
    'assets/pprtnaa/angular/modals/BankAccountEditModal.js',
    'assets/pprtnaa/angular/modals/BankTransferModal.js',
    'assets/pprtnaa/angular/modals/EmailModal.js',
    'assets/pprtnaa/angular/modals/KeyboardShortcutModal.js',
    'assets/pprtnaa/angular/modals/PmethodDeleteModal.js',
    'assets/pprtnaa/angular/modals/PmethodEditModal.js',
    'assets/pprtnaa/angular/modals/PayNowModal.js',
    'assets/pprtnaa/angular/modals/POSFilemanagerModal.js',
    'assets/pprtnaa/angular/modals/POSReceiptTemplateEditModal.js',
    'assets/pprtnaa/angular/modals/PrinterDeleteModal.js',
    'assets/pprtnaa/angular/modals/PrinterEditModal.js',
    'assets/pprtnaa/angular/modals/PrintReceiptModal.js',
    'assets/pprtnaa/angular/modals/ProductCreateModal.js',
    'assets/pprtnaa/angular/modals/ProductDeleteModal.js',
    'assets/pprtnaa/angular/modals/ProductEditModal.js',
    'assets/pprtnaa/angular/modals/ProductReturnModal.js',
    'assets/pprtnaa/angular/modals/ProductViewModal.js',
    'assets/pprtnaa/angular/modals/StoreDeleteModal.js',
    'assets/pprtnaa/angular/modals/SupplierCreateModal.js',
    'assets/pprtnaa/angular/modals/SupplierDeleteModal.js',
    'assets/pprtnaa/angular/modals/SupplierEditModal.js',
    'assets/pprtnaa/angular/modals/BrandCreateModal.js',
    'assets/pprtnaa/angular/modals/BrandDeleteModal.js',
    'assets/pprtnaa/angular/modals/BrandEditModal.js',
    'assets/pprtnaa/angular/modals/UserCreateModal.js',
    'assets/pprtnaa/angular/modals/UserDeleteModal.js',
    'assets/pprtnaa/angular/modals/UserEditModal.js',
    'assets/pprtnaa/angular/modals/UserGroupCreateModal.js',
    'assets/pprtnaa/angular/modals/UserGroupDeleteModal.js',
    'assets/pprtnaa/angular/modals/UserGroupEditModal.js',
    'assets/pprtnaa/angular/modals/UserInvoiceDetailsModal.js',
    'assets/pprtnaa/angular/modals/GiftcardCreateModal.js',
    'assets/pprtnaa/angular/modals/GiftcardEditModal.js',
    'assets/pprtnaa/angular/modals/GiftcardViewModal.js',
    'assets/pprtnaa/angular/modals/GiftcardTopupModal.js',
    'assets/pprtnaa/angular/modals/InvoiceSMSModal.js',
    'assets/pprtnaa/angular/modals/PaymentFormModal.js',
    'assets/pprtnaa/angular/modals/PaymentOnlyModal.js',
    'assets/pprtnaa/angular/modals/PurchaseInvoiceViewModal.js',
    'assets/pprtnaa/angular/modals/PurchaseInvoiceInfoEditModal.js',
    'assets/pprtnaa/angular/modals/PurchasePaymentModal.js',
    'assets/pprtnaa/angular/modals/SellReturnModal.js',
    'assets/pprtnaa/angular/modals/PurchaseReturnModal.js',
    'assets/pprtnaa/angular/modals/ExpenseSummaryModal.js',
    'assets/pprtnaa/angular/modals/SummaryReportModal.js',
    
],'assets/pprtnaa/angularmin/modal.js');



// Main JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/jquery-ui/jquery-ui.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/chartjs/Chart.min.js',
    'assets/sparkline/jquery.sparkline.min.js',
    'assets/datepicker/bootstrap-datepicker.js',
    'assets/timepicker/bootstrap-timepicker.min.js',
    'assets/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    'assets/select2/select2.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/sweetalert/sweetalert.min.js',
    'assets/toastr/toastr.min.js',
    'assets/accounting/accounting.min.js',
    'assets/underscore/underscore.min.js',
    'assets/pprtnaa/js/ie.js',
    'assets/pprtnaa/js/theme.js',
    'assets/pprtnaa/js/common.js',
    'assets/pprtnaa/js/main.js',
    'assets/DataTables/datatables.min.js',
    'assets/pprtnaa/angularmin/angular.js',
    'assets/pprtnaa/angularmin/modal.js',
    'assets/pprtnaa/angularmin/filemanager.js',

],'assets/pprtnaa/jsmin/main.js');



// POS JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/jquery-ui/jquery-ui.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/pprtnaa/angularmin/angular.js',
    'assets/pprtnaa/angular/angularApp.js',
    'assets/pprtnaa/angularmin/filemanager.js',
    'assets/pprtnaa/angularmin/modal.js',

    'assets/datepicker/bootstrap-datepicker.js',
    'assets/timepicker/bootstrap-timepicker.min.js',
    'assets/select2/select2.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/sweetalert/sweetalert.min.js',
    'assets/toastr/toastr.min.js',
    'assets/accounting/accounting.min.js',
    'assets/underscore/underscore.min.js',
    'assets/contextMenu/dist/jquery.contextMenu.min.js',
    'assets/pprtnaa/js/ie.js',

    'assets/pprtnaa/js/common.js',
    'assets/pprtnaa/js/main.js',
    'assets/pprtnaa/js/pos/pos.js',

],'assets/pprtnaa/jsmin/pos.js');


// LOGIN JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/toastr/toastr.min.js',
    'assets/pprtnaa/js/forgot-password.js',
    'assets/pprtnaa/js/common.js',
    'assets/pprtnaa/js/login.js',

],'assets/pprtnaa/jsmin/login.js');



// How to build assets
// npm run dev
// npm run production