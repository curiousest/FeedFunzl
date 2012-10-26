Ext.define('Funzl.controller.CustomerDetailsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.customerDetailsController',
    requires: ['Funzl.view.CustomerDetails'],

	
	loadController: function(customer) {
	    var self = this;

		var customerDetails = Ext.create('Funzl.view.CustomerDetails');
        customerDetails.setRecord(customer);
        this.setViews([customerDetails]);
        
        customerDetails.addListener('topRightButtonPressed', function(menuItem) {
	        self.getApplication().fireEvent('beginEditingCustomer',this.getRecord());
	    });
        
		return customerDetails;
	}
});