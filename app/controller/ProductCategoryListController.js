Ext.define('Funzl.controller.ProductCategoryListController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.productCategoryListController',
	requires: ['Funzl.view.ProductCategoryList',
	    'Funzl.store.ProductCategories'],

    config: {

        level: 0,

        refs: {
            productCategoryList: 'productCategoryList',
        },

        control: {
            "productCategoryList": {
                itemtap: 'onProductCategoryListItemTap'
            }
        }
    },
    
    init: function(application) {
        this.callParent();
        this.level = 0;
    },

	
	loadController: function(parentCategory) {
		var self = this;
		this.level = this.level + 1;
		var newFilter = {}
		newFilter['property'] = 'parentCategory';
		newFilter['value'] = parentCategory.internalId;
		
		//Since this function must return a view to push immediately and we don't know whether
		//to push a productcategorylist or a productlist until the server responds, use a container to put the 
		//product or product category list into later so the list can load asynchronously.
		var holdingContainer = Ext.create('Ext.Panel', {layout:'fit',title:parentCategory.data.name});
	
		var productCategoriesStore = Ext.create('Funzl.store.ProductCategories', {storeId: 'ProductCategories'+this.level, filters:[newFilter]});
        
		productCategoriesStore.on('load', function(store, records){
            productCategoriesStore.setData(records);
			
            //if there are child categories for the parent category used in the get query
            if(productCategoriesStore.getCount() > 0){
				
				//create unique productcategorylist
				var productCategoryList = Ext.create('Funzl.view.ProductCategoryList',{
					store:productCategoriesStore,
					itemId:"productCategoryList"+self.level,
					title:parentCategory.data.name
				});
				
				//listen for onProductCategoryListItemTap for this productcategorylist by setting a new ref to productCategoryList from this itemId
				var refs = self.getRefs();
				refs['productCategoryList'+self.level] = 'productCategoryList';
				self.setRefs(refs);
				
				self.getViews().push(productCategoryList);
				holdingContainer.add([productCategoryList]);
            }
            //else there are no product categories under that parent, only products. Load and return the product list view.
            else{
				holdingContainer.add(self.getApplication().getController('ProductListController').loadController(parentCategory));
            }
        });
        
        holdingContainer.addListener('topRightButtonPressed', function(menuItem) {
	        self.getApplication().fireEvent('scanBarcodeButtonPressed');
	    });
        
        return holdingContainer;
	},

    onProductCategoryListItemTap: function(dataview, index, target, record, e, options) {
		this.getApplication().fireEvent('productCategorySelected', record);
    },
    
});