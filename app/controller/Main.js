/*
 * File: app/controller/Customers.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Funzl.controller.Main', {
    extend: 'Ext.app.Controller',
    alias: 'controller.main',


    config: {                
        //the detail navigation pane's controller
        detailNavController:null,
        
        //the menu navigation pane's controller
        menuNavController:null,
        
        singlePaned: false
    },

    init: function(application) {
        if (navigator.userAgent.match(/Android/i)){
            singlePaned = true;
        }
        this.detailNavController = this.getApplication().getController('DetailNavController');
        
        if (!singlePaned)
            this.menuNavController = this.getApplication().getController('MenuNavController');

    },

    launch: function() {
        var size = Ext.getBody().getSize();
        if (singlePaned) {
            this.setViews([Ext.create('Ext.Container', {
                    //the fullscreen: true config option sets the view to display in the front of the application's viewport
                    fullscreen: true,
                  

                    items: [this.detailNavController.getViews()]
                })]);
        }
        else {
            this.setViews([Ext.create('Ext.Container', {
                    //the fullscreen: true config option sets the view to display in the front of the application's viewport
                    fullscreen: true,
                  
                    //add the two navigation views (belonging to their respective controllers) and the spacer between
                    //them to the container view of this controller
                    items: [
                        {
                            xtype: 'spacer',
                            height: Math.min(size.height, size.width),
                            left: Math.floor(Math.max(size.height, size.width) / 3),
                            width: 3
                        }
                    ].concat(this.detailNavController.getViews(), this.menuNavController.getViews())
                })]);
        }
    }

});