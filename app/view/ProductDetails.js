/*
 * File: app/view/ProductDetails.js
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

Ext.define('Funzl.view.ProductDetails', {
    extend: 'Ext.Panel',

    config: {
        itemId: 'productDetails',
        styleHtmlContent: true,
        layout: {
            type: 'fit'
        },
        scrollable: 'vertical',
        tpl: [
            '<table>',
            '    <tr>',
            '        <td>',
            '            <h3>Product Info.</h3>',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Product Name:',
            '        </td>',
            '        <td>',
            '            {name}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Product Code:',
            '        </td>',
            '        <td>',
            '            {code}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Short Description:',
            '        </td>',
            '        <td>',
            '            {shortDescription}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Long Description:',
            '        </td>',
            '        <td>',
            '            {longDescription}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Category:',
            '        </td>',
            '        <td>',
            '            {category}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Price:',
            '        </td>',
            '        <td>',
            '            {Price}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Unit of Quantity:',
            '        </td>',
            '        <td>',
            '            {unitOfQuantity}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Size:',
            '        </td>',
            '        <td>',
            '            {size}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Unit:',
            '        </td>',
            '        <td>',
            '            {unit}',
            '        </td>',
            '    </tr>',
            '    <tr>',
            '        <td>',
            '            Stock:',
            '        </td>',
            '        <td>',
            '            {stock}',
            '        </td>',
            '    </tr>',
            '</table>',

            '<img src="',
                '{pictureUrl}',
                '" alt="',
                '{name}',
            '">',
            ''
        ]
    }

});