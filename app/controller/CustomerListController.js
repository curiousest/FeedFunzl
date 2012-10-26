Ext.define('Funzl.controller.CustomerListController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.customerListController',

    config: {

        refs: {
            customerList: 'customerList',
        },

        control: {
            "customerList": {
                itemtap: 'onCustomerListItemTap'
            }
        }
    },

	loadController: function() {
        var customerList = Ext.create('Funzl.view.CustomerList', {title:'Customer List'});

        this.setViews([customerList]);
        
        return customerList;
	},

    onCustomerListItemTap: function(dataview, index, target, record, e, options) {
		this.getApplication().fireEvent('customerSelected', record);
    }
});