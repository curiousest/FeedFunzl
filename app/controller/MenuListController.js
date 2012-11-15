Ext.define('Funzl.controller.MenuListController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.menuListController',
	requires: ['Funzl.view.MenuList'],

    config: {

        refs: {
            productList: 'menuList'
        },

        control: {
            "menuList": {
                itemtap: 'onMenuListItemTap'
            }
        }
    },
	
	loadController: function(customer) {
        var menuList = Ext.create('Funzl.view.MenuList', {title:'Funzl Main Menu'});
		return menuList;
	},

    onMenuListItemTap: function(dataview, index, target, record, e, options) {
		this.getApplication().fireEvent('menuItemSelected', record);
    }
    
});