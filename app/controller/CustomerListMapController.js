Ext.define('Funzl.controller.CustomerListMapController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.customerListMapController',
    requires: ['Ext.Map'],
	
	loadController: function(mapTitle) {
		var customerMap = Ext.create('Ext.Map', {
            title: mapTitle,
            mapOptions : {
                center : new google.maps.LatLng(53.348912, -6.263795),  //nearby Dublin
                zoom : 13,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },
        });
            
        var customerStore = Ext.getStore('Customers');
        
        //when the store is loaded, add all the markers for the store to the map
        customerStore.on('load', function(store, records){

            for (record in records) {
                //if the customer has a lat and long, add them to the map
                if (records[record].data.lat && records[record].data.long) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(records[record].data.lat, records[record].data.long),
                        map: customerMap.getMap(),
                        title: records[record].data.name
                    });
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function () {
                            infowindow.open(customerMap, marker);
                        }
                    }));
                }
            }
        });

        
		return customerMap;
	}
});