Ext.define('Funzl.controller.ProductDetailsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.productDetailsController',
    requires: ['Funzl.view.ProductDetails'],
	
	loadController: function(product) {
	    var productDetails = Ext.create('Funzl.view.ProductDetails', {title:product.data.name});
		productDetails.setRecord(product);
		this.setViews([productDetails]);
        
		return productDetails;
	}
});