Ext.define('Funzl.controller.ProductListController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.productListController',
	requires: ['Funzl.view.ProductList',
	    'Funzl.store.Products'],

    config: {

        refs: {
            productList: 'productList',
        },

        control: {
            "productList": {
                itemtap: 'onProductListItemTap'
            }
        }
    },
	
	loadController: function(parentCategory) {
		var self = this;
		var newFilter = {}
		newFilter['property'] = 'parentCategory';
		newFilter['value'] = parentCategory.internalId;
		
		var productStore = Ext.create('Funzl.store.Products',{filters:newFilter});
        var productList = Ext.create('Funzl.view.ProductList', {title:parentCategory.data.name});
        
        Ext.getStore('Products').on('load', function(store, records){
            Ext.getStore('Products').setData(records);
        }); 
		
		return productList;
	},

    onProductListItemTap: function(dataview, index, target, record, e, options) {
		this.getApplication().fireEvent('productSelected', record);
    },
    
});