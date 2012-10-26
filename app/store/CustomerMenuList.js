/*
 * File: app/store/DeeperMenuList.js
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

Ext.define('Funzl.store.CustomerMenuList', {
    extend: 'Ext.data.Store',
    alias: 'store.customerMenuList',

    requires: [
        'Funzl.model.MenuItem',
        'Ext.data.reader.Array'
    ],

    config: {
        data: [
            {
                title: 'Customer Details'
            },
            {
                title: 'Product Catalogue'
            },
            {
                title: 'Orders'
            },
            {
                title: 'Basket'
            }
        ],
        model: 'Funzl.model.MenuItem',
        storeId: 'CustomerMenuList',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'array'
            }
        }
    }
});