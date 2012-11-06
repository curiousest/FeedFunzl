Ext.define('Funzl.controller.CustomerTabPanelController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.customerTabPanelController',
	requires: ['Ext.tab.Panel'],

	
	loadController: function(panelTitle) {
		//the tab panel that holds all the kinds of customer list views
		var holdingTabPanel = Ext.create('Ext.tab.Panel', {

			title: panelTitle,
			tabBarPosition: 'bottom',
			items: [this.getApplication().getController('CustomerListController').loadController('List'),
				this.getApplication().getController('CustomerListMapController').loadController('Map')]
		});
		
		this.setViews([holdingTabPanel]);

        return holdingTabPanel;
	}
});