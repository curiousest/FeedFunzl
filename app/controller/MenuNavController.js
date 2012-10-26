Ext.define('Funzl.controller.MenuNavController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.menuNavController',

    config: {
        //menuNavController's navigation view
        menuNav: null,

    },
    
    init: function(application){
	    var self = this;
	    application.addListener('customerSelected', function(customer) {
             self.pushControllersView('CustomerMenuListController', customer);
        });
	},
	
	launch: function() {
	    this.menuNav = Ext.create('Ext.NavigationView', {
	        height: 768,
            id: 'menuNav',
            title: 'ttiel',
            itemId: 'menuNav',
            width: 340
	    });
	    this.setViews([this.menuNav]);
        this.pushControllersView('MenuListController');
	},
    
    //load the controller and push the view it generates onto the buttoned navigation view
	pushControllersView: function(controllerString, args) {
	    var controller = this.getApplication().getController(controllerString);
	    this.menuNav.push(controller.loadController(args));
	}
});