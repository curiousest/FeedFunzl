Ext.define('Funzl.controller.EditCustomerDetailsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.editCustomerDetailsController',
    requires: ['Funzl.view.EditCustomerDetails',],
	
	loadController: function(customer) {
	    var self = this;

		var editCustomerDetails = Ext.create('Funzl.view.EditCustomerDetails');
        editCustomerDetails.setRecord(customer);
        this.setViews([editCustomerDetails]);
        
        editCustomerDetails.addListener('topRightButtonPressed', function(menuItem) {
			editCustomerDetails.getRecord().setDirty();
			Ext.getStore('Customers').add(editCustomerDetails.getRecord());
			Ext.getStore('Customers').sync();
	        self.getApplication().fireEvent('finishedEditingCustomer');
	    });
        
		return editCustomerDetails;
	}
});