Ext.define('Funzl.controller.DetailNavController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.detailNavController',
    requires: [
        'Funzl.view.ButtonedNavigationView',
        'Funzl.view.CustomerList',
        'Funzl.view.EditCustomerDetails'
        ],

    config: {
        //detailNavController's navigation view
        detailsNav: null,

    },
	
	init: function(application){
	    
	    var self = this;
	    
	    var size = Ext.getBody().getSize();
	    
	    this.detailsNav = Ext.create('Funzl.view.ButtonedNavigationView', {
            height: Math.min(size.height, size.width),
            id: 'detailsNav',
            itemId: 'detailsNav',
            left: Math.floor(Math.max(size.height, size.width) / 3),
            width: Math.floor(Math.max(size.height, size.width) * 2 / 3)
        });
	    
	    //listener for when menu items are selected in one of the menu lists
	    application.addListener('menuItemSelected', function(menuItem) {
             if (menuItem.raw.title == 'Customers'){
                 if (self.detailsNav.pop()){
                     self.detailsNav.reset();
                     self.pushControllersView('CustomerTabPanelController', 'Hidden');
                 }
             }
             else if (menuItem.raw.title == "Default Catalogue"){
                 self.pushControllersView('ProductCategoryListController', 'Scan Barcode', 
                     {internalId: 'c7280f44-dc93-42ac-81e3-6442b01582d8', data:{name: 'Product Categories'}});
             }
             else if (menuItem.raw.title == 'Product Catalogue') {
                 self.pushControllersView('ProductCategoryListController', 'Scan Barcode', 
                     {internalId: 'c7280f44-dc93-42ac-81e3-6442b01582d8', data:{name: 'Product Categories'}});
             }
         });
         
         application.addListener('customerSelected', function(customer) {
             self.pushControllersView('CustomerDetailsController', 'Edit', customer);
         });
         
         application.addListener('beginEditingCustomer', function(customer) {
             self.pushControllersView('EditCustomerDetailsController', 'Save', customer);
         });
         
         application.addListener('finishedEditingCustomer', function() {
             self.detailsNav.pop();
         });
         
         application.addListener('productCategorySelected', function(productCategory) {
             self.pushControllersView('ProductCategoryListController', 'Scan Barcode', productCategory);
         });
         
         application.addListener('productSelected', function(product) {
             self.pushControllersView('ProductDetailsController', 'Hidden', product);
         });
         
         application.addListener('scanBarcodeButtonPressed', function(product) {
             var code;
             if (window && window.plugins && window.plugins.barcodeScanner && window.plugins.barcodeScanner.scan) {
                 window.plugins.barcodeScanner.scan(function(result){
                     code = result.text;
                 });
             }
             //if the barcode scanner isn't supported, type the barcode number
             else {
                 code = prompt ("Enter the barcode number.");
             }
             
             //try pushing a product details view
             console.log(code);
         });
	},
	
	launch: function() {
        this.setViews([this.detailsNav]);

        //load the first view/view controller, the customer list
        this.pushControllersView('CustomerTabPanelController', 'Hidden');
	},
	
	//load the controller and push the view it generates onto the buttoned navigation view
	pushControllersView: function(controllerString, topRightButtonText, args) {
	    var controller = this.getApplication().getController(controllerString);
	    this.detailsNav.push(controller.loadController(args), topRightButtonText);
	}
});