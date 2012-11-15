Ext.define('Funzl.controller.CustomerMenuListController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.customerMenuListController',
	requires: ['Funzl.view.CustomerMenuList'],

    config: {

        refs: {
            customerMenuList: 'customerMenuList',
            customer: null
        },

        control: {
            "customerMenuList": {
                itemtap: 'onCustomerMenuListItemTap'
            }
        }
    },
	
	loadController: function(customer) {
        var menuList = Ext.create('Funzl.view.CustomerMenuList', {title:'Funzl Main Menu'});
        this.customer = customer;
		return menuList;
	},

    onCustomerMenuListItemTap: function(dataview, index, target, record, e, options) {
		this.getApplication().fireEvent('menuItemSelected', record, this.customer);
    }
    
});