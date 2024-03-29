Ext.define('Funzl.controller.MenuNavController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.menuNavController',

    config: {
        //menuNavController's navigation view
        menuNav: null,
        
        singlePaned: false
    },
    
    init: function(application){
	    var self = this;
	    if (navigator.userAgent.match(/Android/i))
	        this.singlePaned = true;
	    if (!this.singlePaned){
    	    application.addListener('customerSelected', function(customer) {
                 self.pushControllersView('CustomerMenuListController', customer);
            });
        }
	},
	
	launch: function() {
	    
	    var size = Ext.getBody().getSize();
	    
	    if(!this.singlePaned) {
    	    this.menuNav = Ext.create('Ext.NavigationView', {
    	        height: Math.min(size.height, size.width),
                id: 'menuNav',
                title: 'ttiel',
                itemId: 'menuNav',
                width: Math.floor(Math.max(size.height, size.width) / 3)
    	    });
    	    this.setViews([this.menuNav]);
            this.pushControllersView('MenuListController');
        }
	},
    
    //load the controller and push the view it generates onto the buttoned navigation view
	pushControllersView: function(controllerString, args) {
	    var controller = this.getApplication().getController(controllerString);
	    this.menuNav.push(controller.loadController(args));
	}
});