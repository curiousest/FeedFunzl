Ext.define('Funzl.view.ButtonedNavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'view.buttonedNavigationView',
	xtype: 'buttonedNavigationView',

    config: {
		//the stack of strings representing what the top right button should be for each view
        rightButtonStack: [],
		
		//the top right button component
		rightButton: null
	},
	
	initialize: function(application) {
	    this.callParent();
		
		//the right button must be included
		this.rightButton = Ext.create('Ext.Button',{
			align: 'right',
			hidden: false,
			itemId: 'rightButton',
			iconAlign: 'right',
			handler: this.rightButtonPressed
		});
	    this.getNavigationBar().add(this.rightButton);
	},
		
	//overridden navigation view push method to handle the different top right button between views
	push: function(view, rightButton) {
		if (!this.rightButtonStack) this.rightButtonStack = [];
	    this.superclass.push.call(this,view);
	    this.rightButtonStack.push(rightButton);
        this.updateRightButtonText();
	},

  	//overridden navigation view pop method to handle the different top right button between views	
	pop: function() {
	    var returnView = this.superclass.pop.call(this);
	    if (this.rightButtonStack.pop()){
    	    this.updateRightButtonText();
    	}
	},
	
	//update the top right button to the top of the rightButtonStack
	updateRightButtonText: function() {
	    var navBar = this.getNavigationBar();
        var navItems = navBar.getItems();
        var buttonText = this.rightButtonStack[this.rightButtonStack.length - 1];

        if (!buttonText || buttonText == 'Hidden') {
            this.rightButton.hide();
        }
        else {
			this.rightButton.show()
			this.rightButton.setText(buttonText);
        }
	},
	
	rightButtonPressed: function() {
		//"this" refers to the top right button's object when this method is called.
		//The navigation view is 3 parents from that object.
		//The active view of the navigation view (the currently visible view) will fire the event.
		this.getParent().getParent().getParent().getActiveItem().fireEvent('topRightButtonPressed');
	}
});