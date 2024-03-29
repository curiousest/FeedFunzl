/*
 * File: app/store/Products.js
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

Ext.define('Funzl.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',

    requires: [
        'Funzl.model.Product',
        'Ext.data.proxy.Rest'
    ],

    config: {
        autoLoad: true,
        model: 'Funzl.model.Product',
        remoteFilter: true,
        storeId: 'Products',
        proxy: {
            type: 'rest',
            url: 'http://funzl-services.appspot.com/data/Product'
        }
    },


});